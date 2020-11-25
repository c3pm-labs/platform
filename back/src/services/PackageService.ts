import { Package, Version } from 'nexus-plugin-prisma/client';
import semverCompare from 'semver/functions/compare';

import { Service } from '../utils/Service';
import { CustomError } from '../utils/errors';

export class PackageService extends Service {
  async search(keyword: string): Promise<Package[]> {
    if (keyword === undefined) {
      throw new CustomError('Need an argument');
    }
    return this.db.package.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
  }

  async getPackage(name: string): Promise<Package> {
    if (name === undefined) {
      throw new CustomError('Need package\'s name');
    }
    return this.db.package.findOne({
      where: {
        name,
      },
    });
  }

  async getVersionOrLatest(packageName: string, version?: string): Promise<Version> {
    if (version !== null) {
      return this.db.version.findOne({
        where: {
          version_packageName: {
            packageName,
            version,
          },
        },
      });
    }
    return this.getLatestVersion(packageName);
  }

  async getLatestVersion(packageName: string): Promise<Version> {
    const versions = await this.db.version.findMany({
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
}
