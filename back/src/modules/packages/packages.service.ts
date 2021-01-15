import { Package, Version } from '@prisma/client';
import semverCompare from 'semver/functions/compare';
import tar from 'tar';
import YAML from 'yaml';
import ObjectStorage from 'scaleway-object-storage';

import { CustomError, ForbiddenError } from '../../utils/errors';
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

export async function search(ctx: Context, keyword: string): Promise<Package[]> {
  return ctx.db.package.findMany({
    where: {
      name: {
        contains: keyword,
      },
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
          versions: {
            create:
            {
              version: parsedC3PM.version,
              readme: readmeBuffer ?? 'There is not readme for this package',
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
        versions: {
          create:
          {
            version: parsedC3PM.version,
            readme: readmeBuffer ?? 'There is not readme for this package',
            description: parsedC3PM.description,
            license: parsedC3PM.license,
          },
        },
      },
    });
  }
  const objectStorage = new ObjectStorage({
    accessKey: process.env.REGISTRY_API_KEY,
    secretKey: process.env.REGISTRY_API_SECRET,
    region: 'fr-par',
  });
  const bucket = process.env.BUCKET_NAME;
  const key = `${parsedC3PM.name}/${parsedC3PM.version}`;
  const body = file.buffer;

  try {
    await objectStorage.putObject({ bucket, key, body });
  } catch (e) {
    throw new ForbiddenError('Package upload failed.');
  }
}
