import { extendType, stringArg } from 'nexus';

import { User } from '../users/users.graphql';

import * as authService from './auth.service';

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('register', {
      type: User,
      args: {
        username: stringArg(),
        email: stringArg(),
        password: stringArg(),
      },
      async resolve(parents, args, ctx) {
        return authService.register(ctx, args);
      },
    });

    t.field('login', {
      type: User,
      args: {
        login: stringArg(),
        password: stringArg(),
      },
      async resolve(parent, args, ctx) {
        return authService.login(ctx, args);
      },
    });

    t.field('logout', {
      type: User,
      async resolve(parent, args, ctx) {
        return authService.logout(ctx);
      },
    });

    t.field('forgotPassword', {
      type: User,
      args: {
        email: stringArg(),
      },
      resolve(parent, args, ctx) {
        return authService.forgotPassword(ctx, args);
      },
    });

    t.field('resetPassword', {
      type: User,
      args: {
        token: stringArg(),
        password: stringArg(),
      },
      resolve(parent, args, ctx) {
        return authService.resetPassword(ctx, args);
      },
    });
  },
});

export const AuthQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('viewer', {
      type: User,
      resolve(parent, args, ctx) {
        return authService.getViewer(ctx);
      },
    });
  },
});
