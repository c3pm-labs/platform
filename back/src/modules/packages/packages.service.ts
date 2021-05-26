import { Package, Version } from '@prisma/client';
import semverCompare from 'semver/functions/compare';
import tar from 'tar';
import YAML from 'yaml';
import AWS from 'aws-sdk';

import { CustomError, ForbiddenError, UserInputError } from '../../utils/errors';
import { Context } from '../../context';
import { bufferToStream, streamToString } from '../../utils/function';

global.fetch = require('node-fetch');

export async function getLatestVersion(ctx: Context, packageName: string): Promise<Version> {
  const versions = await ctx.db.version.findMany({
    where: {
      packageName,
    },
  });
  if (!versions) {
    throw new CustomError('No version found.');
  }
  versions.sort((a, b) => semverCompare(b.version, a.version));
  return versions[0];
}

export async function search(ctx: Context, keyword: string, tags: string[] = [])
  : Promise<Package[]> {
  return ctx.db.package.findMany({
    where: {
      AND: [
        {
          name: {
            contains: keyword,
          },
        },
        {
          tags: tags?.length > 0 ? {
            hasSome: tags,
          } : undefined,
        },
      ],
    },
  });
}

export async function getPackage(ctx: Context, name: string): Promise<Package> {
  return ctx.db.package.findUnique({
    where: {
      name,
    },
  });
}

export async function getVersionOrLatest(
  ctx: Context, packageName: string, version?: string,
): Promise<Version> {
  if (version !== null) {
    return ctx.db.version.findUnique({
      where: {
        version_packageName: {
          packageName,
          version,
        },
      },
    });
  }
  return getLatestVersion(ctx, packageName);
}

export async function deleteVersion(
  ctx: Context, packageName: string, version: string,
): Promise<Version> {
  const user = await ctx.session.get();
  const pkg = await ctx.db.package.findUnique({ where: { name: packageName } });
  if (!user || pkg.authorId !== user.id) {
    throw new ForbiddenError('You need to be logged in');
  }

  const s3 = new AWS.S3({
    accessKeyId: process.env.REGISTRY_KEY,
    secretAccessKey: process.env.REGISTRY_SECRET,
    region: 'fr-par',
    endpoint: process.env.REGISTRY_URL,
    s3ForcePathStyle: true,
  });
  try {
    await s3.deleteObject({
      Bucket: process.env.REGISTRY_BUCKET_NAME,
      Key: `${packageName}/${version}`,
    }).promise();
  } catch (e) {
    console.error('failed to remove package from registry');
  }

  await ctx.db.version.delete({
    where: {
      version_packageName: {
        packageName,
        version,
      },
    },
  });
  return pkg;
}

export async function publish(ctx: Context, file: Express.Multer.File): Promise<void> {
  let c3pmBuffer;
  let readmeBuffer;

  const parseConfFile = new tar.Parse({
    filter: (path: string) => (path.match(/(.+\/|^)(c3pm\.yml)$/)?.length > 0),
    onentry: async (entry: NodeJS.ReadableStream) => {
      c3pmBuffer = await streamToString(entry);
    },
  });
  const parseReadme = new tar.Parse({
    filter: (path: string) => path.match(/(.+\/|^)(README\.md)$/)?.length > 0,
    onentry: async (entry: NodeJS.ReadableStream) => {
      readmeBuffer = await streamToString(entry);
    },
  });

  await bufferToStream(file.buffer).pipe(parseConfFile);
  await bufferToStream(file.buffer).pipe(parseReadme);

  const parsedC3PM = YAML.parse(c3pmBuffer);
  bufferToStream(file.buffer).pipe(parseReadme);

  const user = await ctx.session.get();
  const currentPackage = await ctx.db.package.findUnique({
    where: { name: parsedC3PM.name }, include: { author: true },
  });

  if (currentPackage && currentPackage.author.id !== user.id) {
    throw new ForbiddenError('Package name already taken');
  } else if (currentPackage) {
    try {
      await ctx.db.package.update({
        where: { name: parsedC3PM.name },
        data: {
          tags: parsedC3PM.tags,
          versions: {
            create:
            {
              version: parsedC3PM.version,
              readme: readmeBuffer ?? 'There is no readme for this package',
              description: parsedC3PM.description,
              license: parsedC3PM.license,
            },
          },
        },
      });
    } catch (e) {
      throw new ForbiddenError('This version already exist');
    }
  } else {
    await ctx.db.package.create({
      data: {
        name: parsedC3PM.name,
        author: {
          connect: {
            id: user.id,
          },
        },
        tags: parsedC3PM.tags,
        versions: {
          create:
          {
            version: parsedC3PM.version,
            readme: readmeBuffer ?? 'There is no readme for this package',
            description: parsedC3PM.description,
            license: parsedC3PM.license,
          },
        },
      },
    });
  }

  const s3 = new AWS.S3({
    accessKeyId: process.env.REGISTRY_KEY,
    secretAccessKey: process.env.REGISTRY_SECRET,
    region: 'fr-par',
    endpoint: process.env.REGISTRY_URL,
    s3ForcePathStyle: true,
  });

  await s3.upload({
    ACL: 'public-read',
    Bucket: process.env.REGISTRY_BUCKET_NAME,
    Key: `${parsedC3PM.name}/${parsedC3PM.version}`,
    Body: file.buffer,
  }).promise();
}
