import {
  extendType, objectType, stringArg, nullable, list,
} from 'nexus';

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
    t.model.tags();
    t.model.versions();
    t.model.repository();
    t.model.contributors();
    t.model.documentation();
    t.model.website();
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
        tags: nullable(list(stringArg())),
      },
      resolve(parent, args, ctx) {
        return packagesService.search(ctx, args.keyword, args.tags);
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
      resolve(parent, args, ctx) {
        return packagesService.getVersionOrLatest(ctx, args.packageName, args.version);
      },
    });
  },
});
