import {
  extendType, nullable, objectType, stringArg,
} from 'nexus';

import * as usersService from './users.service';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.email();
    t.model.description();
    t.model.packages();
  },
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nullable.field('user', {
      type: User,
      args: {
        username: nullable(stringArg()),
        id: nullable(stringArg()),
      },
      resolve(parent, args, ctx) {
        return usersService.findOne(ctx, args);
      },
    });
  },
});

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('update', {
      type: User,
      args: {
        id: stringArg(),
        username: nullable(stringArg()),
        email: nullable(stringArg()),
        description: nullable(stringArg()),
      },
      resolve(parent, args, ctx) {
        return usersService.updateUser(ctx, args);
      },
    });

    t.field('updatePassword', {
      type: User,
      args: {
        id: stringArg(),
        password: stringArg(),
        newPassword: stringArg(),
      },
      resolve(parent, args, ctx) {
        return usersService.updatePassword(ctx, args);
      },
    });
  },
});
