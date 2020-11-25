import { User, PrismaClient } from 'nexus-plugin-prisma/client';
import { Request } from 'express';

import { AuthenticationError } from './utils/errors';

export class SessionManager {
  db: PrismaClient;

  req: Request;

  constructor(db: PrismaClient, req: Request) {
    this.db = db;
    this.req = req;
  }

  save(user: User): void {
    this.req.session.userId = user.id;
  }

  isActive(): boolean {
    return !!this.req.session?.userId;
  }

  async get(): Promise<User> {
    const { userId } = this.req.session;
    if (this.req.header('Authorization')) {
      const user = await this.db.user.findOne({ where: { apiKey: this.req.header('Authorization') } });
      if (user) {
        return user;
      }
    }
    if (userId) {
      const user = await this.db.user.findOne({ where: { id: userId } });
      if (user) {
        return user;
      }
    }
    throw new AuthenticationError('you must be logged in');
  }

  async destroy(): Promise<User> {
    const user = await this.get();
    return new Promise((resolve, reject) => this.req.session.destroy((err?: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    }));
  }
}
