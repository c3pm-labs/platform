import { User } from '@prisma/client';
import sgMail from '@sendgrid/mail';
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

export interface ContactUsParams {
  firstname?: string;
  lastname?: string;
  email?: string;
  message?: string;
}

export async function contactUs(ctx: Context, { ...props }: ContactUsParams): Promise<User | null> {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      from: props.email,
      to: 'contact@c3pm.io',
      subject: `Contact from ${props.firstname} ${props.lastname}`,
      text: props.message,
    });
    return null;
  } catch (e) {
    console.log(e);
    throw new ForbiddenError('Error in contact');
  }
}
