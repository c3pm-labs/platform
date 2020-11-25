import { request } from 'http';

import FormData from 'form-data';
import tar from 'tar';
import YAML from 'yaml';

import { Service } from '../utils/Service';
import { ForbiddenError } from '../utils/errors';
import { bufferToStream, streamToString } from '../utils/function';

export class PublishService extends Service {
  async publish(file: Express.Multer.File): Promise<void> {
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

    const user = await this.session.get();
    const currentPackage = await this.db.package.findOne({
      where: { name: parsedC3PM.name }, include: { author: true },
    });

    if (currentPackage && currentPackage.author.id !== user.id) {
      throw new ForbiddenError('Package name already taken');
    } else if (currentPackage) {
      try {
        await this.db.package.update({
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
      await this.db.package.create({
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
    const form = new FormData();
    form.append('package', bufferToStream(file.buffer), { filename: parsedC3PM.version });
    const req = request(
      {
        host: process.env.REGISTRY_HOST,
        port: process.env.REGISTRY_PORT,
        path: '/v1',
        method: 'POST',
        headers: {
          ...form.getHeaders(),
          name: parsedC3PM.name,
          version: parsedC3PM.version,
          authorization: 'secret',
        },
      },
      (response) => {
        // eslint-disable-next-line no-console
        console.log(response.statusCode);
      },
    );
    form.pipe(req);
  }
}
