import {
  arg, extendType, inputObjectType, intArg, list, nullable, objectType, stringArg,
} from 'nexus';
import { Version } from '@prisma/client';

import { paginationArgsToPrisma } from '../../graphql/pagination';

import * as packagesService from './packages.service';

export const Versions = objectType({
  name: 'Version',
  definition(t) {
    t.nonNull.string('description');
    t.nonNull.string('license');
    t.nonNull.field('package', {
      type: 'Package',
      resolve: (parent: Version, _, context) => context.db.version.findUnique({
        where: {
          version_packageName: { version: parent.version, packageName: parent.packageName },
        },
      }).package(),
    });
    t.nonNull.string('readme');
    t.nonNull.field('publishedAt', {
      type: 'DateTime',
    });
    t.nonNull.string('version');
    t.nonNull.list.nonNull.string('tags');
  },
});

export const VersionVersionPackageNameCompoundUniqueInput = inputObjectType({
  name: 'VersionVersionPackageNameCompoundUniqueInput',
  definition(t) {
    t.nonNull.string('packageName');
    t.nonNull.string('version');
  },
});

export const VersionWhereUniqueInput = inputObjectType({
  name: 'VersionWhereUniqueInput',
  definition(t) {
    t.nullable.field('version_packageName', {
      type: VersionVersionPackageNameCompoundUniqueInput,
    });
  },
});

export const Package = objectType({
  name: 'Package',
  definition(t) {
    t.nonNull.list.nonNull.field('versions', {
      type: 'Version',
      args: {
        before: nullable(arg({ type: VersionWhereUniqueInput })),
        after: nullable(arg({ type: VersionWhereUniqueInput })),
        first: intArg(),
        last: intArg(),
      },
      resolve: (parent, args, context) => context.db.package.findUnique({
        where: { name: parent.name },
      }).versions(paginationArgsToPrisma(args)),
    });
    t.nonNull.field('author', {
      type: 'User',
      resolve: (parent, _, context) => context.db.package.findUnique({
        where: { name: parent.name },
      }).author(),
    });
    t.nonNull.string('name');
    t.nonNull.list.nonNull.string('tags');
    t.nonNull.string('repository');
    t.nonNull.list.nonNull.string('contributors');
    t.nonNull.string('documentation');
    t.nonNull.string('website');
    t.nonNull.int('downloads');
    t.field('latest', {
      type: 'Version',
      resolve(pkg, _args, ctx) {
        return packagesService.getLatestVersion(ctx, pkg.name);
      },
    });
  },
});

export const PackageWhereUniqueInput = inputObjectType({
  name: 'PackageWhereUniqueInput',
  definition(t) {
    t.nullable.string('name');
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
      resolve(parent, args) {
        return packagesService.search(args.keyword);
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

    t.list.field('discover', {
      type: Package,
      args: {},
      resolve(parent, args, ctx) {
        return packagesService.getPopularPackages(ctx);
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

export const PackageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('deleteVersion', {
      type: Package,
      args: {
        packageName: stringArg(),
        version: stringArg(),
      },
      resolve(parent, args, ctx) {
        return packagesService.deleteVersion(ctx, args.packageName, args.version);
      },
    });
  },
});
