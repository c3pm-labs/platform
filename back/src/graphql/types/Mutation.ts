import {
  mutationType, nullable, stringArg,
} from '@nexus/schema';

import { AuthService } from '../../services/AuthService';
import { UpdateService } from '../../services/UpdateService';
import { ForgotPasswordService } from '../../services/ForgotService';

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
    t.field('forgotPassword', {
      type: User,
      args: {
        email: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const forgotPasswordService = new ForgotPasswordService(ctx);
        return forgotPasswordService.forgotPassword(args);
      },
    }),
    t.nullable.field('update', {
      type: User,
      args: {
        id: nullable(stringArg()),
        username: nullable(stringArg()),
        email: nullable(stringArg()),
        description: nullable(stringArg()),
      },
      resolve: async (parent, args, ctx) => {
        const updateService = new UpdateService(ctx);
        return updateService.updateUser(args);
      },
    });
  },
});
