import {
  extendType, objectType, stringArg, nullable,
} from 'nexus';

import { PackageService } from '../../services/PackageService';

import * as packagesService from './packages.service';

export const Versions = objectType({
  name: 'Version',
  definition(t) {
    t.model.description();
    t.model.license();
    t.model.package();
    t.model.readme();
    t.model.publishedAt();
    t.model.version();
  },
});

export const Package = objectType({
  name: 'Package',
  definition(t) {
    t.model.author();
    t.model.name();
    t.model.versions();
    t.field('latest', {
      type: 'Version',
      resolve(pkg, _args, ctx) {
        return packagesService.getLatestVersion(ctx, pkg.name);
      },
    });
  },
});

export const PackageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('search', {
      type: Package,
      args: {
        keyword: stringArg(),
      },
      resolve(parent, args, ctx) {
        return packagesService.search(ctx, args.keyword);
      },
    });

    t.field('package', {
      type: Package,
      args: {
        name: stringArg(),
      },
      resolve(parent, args, ctx) {
        return packagesService.getPackage(ctx, args.name);
      },
    });

    t.field('version', {
      type: Versions,
      args: {
        packageName: stringArg(),
        version: nullable(stringArg()),
      },
      resolve: async (parent, args, ctx) => {
        const packageService = new PackageService(ctx);
        return packageService.getVersionOrLatest(args.packageName, args.version);
      },
    });
  },
});
