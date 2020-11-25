import { User } from 'nexus-plugin-prisma/client';
import { hash, compare } from 'bcryptjs';

import { Service } from '../utils/Service';
import { AuthenticationError, ForbiddenError } from '../utils/errors';

export interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

export interface LoginParams {
  login: string;
  password: string;
}

export class AuthService extends Service {
  async register({ username, email, password }: RegisterParams): Promise<User> {
    if (this.session.isActive()) {
      throw new ForbiddenError('user already logged in');
    }

    const hashedPassword = await hash(password, 10);
    let user;
    try {
      user = await this.db.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
    } catch (e) {
      throw new ForbiddenError('user already exists', e);
    }

    this.session.save(user);
    return user;
  }

  async login({ login, password }: LoginParams): Promise<User> {
    if (this.session.isActive()) {
      throw new ForbiddenError('already logged in');
    }
    let user;

    user = await this.db.user.findOne({ where: { email: login } });
    if (!user) {
      user = await this.db.user.findOne({ where: { username: login } });
    }
    if (!user || !await compare(password, user.password)) {
      throw new AuthenticationError('invalid credentials');
    }

    this.session.save(user);
    return user;
  }

  async logout(): Promise<User> {
    return this.session.destroy();
  }

  async viewer(): Promise<User> {
    return this.session.get();
  }
}
