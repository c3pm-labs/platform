import { nullable, queryType, stringArg } from '@nexus/schema';

import { AuthService } from '../../services/AuthService';
import { UserService } from '../../services/UserService';
import { PackageService } from '../../services/PackageService';

import { Viewer } from './Viewer';
import { User } from './User';
import { Package, Versions } from './Package';

export const Query = queryType({
  definition(t) {
    t.field('viewer', {
      type: Viewer,
      resolve: async (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.viewer();
      },
    });
    t.nullable.field('user', {
      type: User,
      args: {
        username: nullable(stringArg()),
        id: nullable(stringArg()),
      },
      resolve: async (parent, args, ctx) => {
        const userService = new UserService(ctx);
        return userService.findOne(args);
      },
    });
    t.list.field('search', {
      type: Package,
      args: {
        keyword: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const packageService = new PackageService(ctx);
        return packageService.search(args.keyword);
      },
    });
    t.field('package', {
      type: Package,
      args: {
        name: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const packageService = new PackageService(ctx);
        return packageService.getPackage(args.name);
      },
    });
    t.field('version', {
      type: Versions,
      args: {
        packageName: stringArg(),
        version: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const packageService = new PackageService(ctx);
        return packageService.getVersionOrLatest(args.packageName, args.version);
      },
    });
  },
});
