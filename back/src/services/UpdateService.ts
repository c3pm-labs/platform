import { User } from 'nexus-plugin-prisma/client';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface UpdateUserParams {
  id?: string;
  username?: string;
  email?: string;
  description?: string;
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
}
