import { v4 as uuidv4 } from 'uuid';
import { User } from '@prisma/client';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface ForgotPasswordParams {
  email?: string;
}

export class ForgotPasswordService extends Service {
  async forgotPassword({
    email
  }: ForgotPasswordParams): Promise<User> {
    if (!email) {
      throw new UserInputError('Email argument is required.');
    }
    const token = uuidv4();
    return this.db.user.update({
      where: {
        email,
      },
      data: {
        resetPasswordToken: token,
      },
    });
  }
}
