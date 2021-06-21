import { User } from '@prisma/client';
import { hash, compare } from 'bcryptjs';

import { ForbiddenError, UserInputError } from '../../utils/errors';
import { Context } from '../../context';

export interface FindUserParams {
  username?: string;
  id?: string;
}

export async function findOne(ctx: Context, { username, id }: FindUserParams): Promise<User> {
  if ((username === undefined) === (id === undefined)) {
    throw new UserInputError('Require one argument');
  }
  return ctx.db.user.findUnique({
    where: {
      username,
      id,
    },
  });
}

export interface UpdateUserParams {
  id?: string;
  username?: string;
  email?: string;
  description?: string;
}

export async function updateUser(ctx: Context, {
  id, username, email, description,
}: UpdateUserParams): Promise<User> {
  if (!username && !email && !description) {
    throw new UserInputError('Require one argument');
  }
  const user = await ctx.session.get();
  if (!user) {
    throw new ForbiddenError('You need to be logged in');
  }
  return ctx.db.user.update({
    where: {
      id,
    },
    data: {
      email,
      username,
      description,
    },
  });
}

export interface UpdatePasswordParams {
  password: string;
  newPassword: string;
}

export async function updatePassword(ctx: Context, params: UpdatePasswordParams): Promise<User> {
  const user = await ctx.session.get();

  if (!user || !(await compare(params.password, user.password))) {
    throw new UserInputError('Unable to update your password');
  }
  const newHashedPassword = await hash(params.newPassword, 10);
  return ctx.db.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: newHashedPassword,
    },
  });
}
