import { User } from 'nexus-plugin-prisma/client';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface FindUserParams {
  username?: string;
  id?: string;
}

export class UserService extends Service {
  async findOne({ username, id }: FindUserParams): Promise<User> {
    if ((username === undefined) === (id === undefined)) {
      throw new UserInputError('Require one argument');
    }
    return this.db.user.findOne({
      where: {
        username,
        id,
      },
    });
  }
}
