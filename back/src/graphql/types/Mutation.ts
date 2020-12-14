import {
  mutationType, nullable, stringArg,
} from '@nexus/schema';

import { AuthService } from '../../services/AuthService';
import { UpdateService } from '../../services/UpdateService';

import { Viewer } from './Viewer';
import { User } from './User';

export const Mutation = mutationType({
  definition(t) {
    t.field('register', {
      type: Viewer,
      args: {
        username: stringArg(),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.register(args);
      },
    });
    t.field('login', {
      type: Viewer,
      args: {
        login: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.login(args);
      },
    });
    t.field('logout', {
      type: Viewer,
      resolve: (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.logout();
      },
    });
    t.field('update', {
      type: User,
      args: {
        id: stringArg(),
        username: nullable(stringArg()),
        email: nullable(stringArg()),
        description: nullable(stringArg()),
      },
      resolve: async (parent, args, ctx) => {
        const updateService = new UpdateService(ctx);
        return updateService.updateUser(args);
      },
    });
    t.field('updatePassword', {
      type: User,
      args: {
        id: stringArg(),
        password: stringArg(),
        newPassword: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const updateService = new UpdateService(ctx);
        return updateService.updatePassword(args);
      },
    });
  },
});
