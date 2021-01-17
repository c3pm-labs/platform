import { User } from '@prisma/client';
import { hash, compare } from 'bcryptjs';
import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';

import { AuthenticationError, ForbiddenError, UserInputError } from '../../utils/errors';
import { Context } from '../../context';

export interface ResetPasswordParams {
  token ?: string;
  password?: string;
}

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

export interface ForgotPasswordParams {
  email?: string;
}

export async function forgotPassword(ctx: Context, { email }: ForgotPasswordParams): Promise<User> {
  const token = uuidv4();

  try {
    const user: User = await ctx.db.user.update({
      where: {
        email,
      },
      data: {
        resetPasswordToken: token,
      },
    });
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      from: 'contact@c3pm.io',
      to: email,
      subject: 'Reset Password',
      text: 'Click on the link to reset your password',
      html: `<p>Click <a href='${process.env.FRONTEND_URL}/reset_password?token=${token}'>here</a> to reset your password.</p>`,
    });
    return user;
  } catch (e) {
    throw new UserInputError('Invalid email');
  }
}

export async function resetPassword(ctx: Context, {
  token, password,
}: ResetPasswordParams): Promise<User> {
  const hashedPassword = await hash(password, 10);
  return ctx.db.user.update({
    where: {
      resetPasswordToken: token,
    },
    data: {
      password: hashedPassword,
    },
  });
}
