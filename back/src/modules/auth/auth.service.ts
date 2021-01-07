import { User } from '@prisma/client';
import { hash, compare } from 'bcryptjs';

import { AuthenticationError, ForbiddenError } from '../../utils/errors';
import { Context } from '../../context';

export interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

export async function register(ctx: Context, params: RegisterParams): Promise<User> {
  if (ctx.session.isActive()) {
    throw new ForbiddenError('user already logged in');
  }

  const hashedPassword = await hash(params.password, 10);
  let user;
  try {
    user = await ctx.db.user.create({
      data: {
        username: params.username,
        email: params.email,
        password: hashedPassword,
      },
    });
  } catch (e) {
    throw new ForbiddenError('user already exists', e);
  }

  ctx.session.save(user);
  return user;
}

export interface LoginParams {
  login: string;
  password: string;
}

export async function login(ctx: Context, params: LoginParams): Promise<User> {
  if (ctx.session.isActive()) {
    throw new ForbiddenError('already logged in');
  }

  const user = await ctx.db.user.findFirst({
    where: {
      OR: [{ email: params.login }, { username: params.login }],
    },
  });
  if (!user || !(await compare(params.password, user.password))) {
    throw new AuthenticationError('invalid credentials');
  }

  ctx.session.save(user);
  return user;
}

export async function logout(ctx: Context): Promise<User> {
  return ctx.session.destroy();
}

export async function getViewer(ctx: Context): Promise<User> {
  return ctx.session.get();
}
