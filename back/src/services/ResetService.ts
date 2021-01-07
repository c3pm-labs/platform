import { User } from '@prisma/client';
import { hash } from 'bcryptjs';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface ResetPasswordParams {
  token ?: string;
  password?: string;
}

export class ResetPasswordService extends Service {
  async resetPassword({
    token, password,
  }: ResetPasswordParams): Promise<User> {
    if (!token || !password) {
      throw new UserInputError('Missing arguments.');
    }
    const hashedPassword = await hash(password, 10);
    return this.db.user.update({
      where: {
        resetPasswordToken: token,
      },
      data: {
        password: hashedPassword,
      },
    });
  }
}
