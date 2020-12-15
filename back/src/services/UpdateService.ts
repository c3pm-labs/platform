import { User } from '@prisma/client';
import { hash, compare } from 'bcryptjs';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface UpdateUserParams {
  id?: string;
  username?: string;
  email?: string;
  description?: string;
}

export interface UpdatePasswordParams {
  id: string;
  password: string;
  newPassword: string;
}

export class UpdateService extends Service {
  async updateUser({
    id, username, email, description,
  }: UpdateUserParams): Promise<User> {
    if (!username && !email && !description) {
      throw new UserInputError('Require one argument');
    }
    return this.db.user.update({
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

  async updatePassword({
    id, password, newPassword,
  }: UpdatePasswordParams): Promise<User> {
    const user = await this.db.user.findUnique({ where: { id } });

    if (!user || !(await compare(password, user.password))) {
      throw new UserInputError('Unable to update your password');
    }
    const newHashedPassword = await hash(newPassword, 10);
    return this.db.user.update({
      where: {
        id,
      },
      data: {
        password: newHashedPassword,
      },
    });
  }
}
