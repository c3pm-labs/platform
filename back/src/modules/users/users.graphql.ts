import {
  arg, extendType, intArg, nullable, objectType, stringArg,
} from 'nexus';

import { PackageWhereUniqueInput } from '../packages/packages.graphql';
import { paginationArgsToPrisma } from '../../graphql/pagination';

import * as usersService from './users.service';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('username');
    t.nonNull.string('email');
    t.nonNull.string('description');
    t.nonNull.list.nonNull.field('packages', {
      type: 'Package',
      args: {
        before: nullable(arg({ type: PackageWhereUniqueInput })),
        after: nullable(arg({ type: PackageWhereUniqueInput })),
        first: intArg(),
        last: intArg(),
      },
      resolve: (parent, args, context) => context.db.user.findUnique({
        where: { id: parent.id },
      }).packages(paginationArgsToPrisma(args)),
    });
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
     t.field('contactUs', {
      type: User,
      args: {
        firstname: stringArg(),
        lastname: nullable(stringArg()),
        email: stringArg(),
        message: stringArg(),
      },
      resolve(parent, args, ctx) {
        return usersService.contactUs(ctx, args);
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
