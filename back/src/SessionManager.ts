import { PrismaClient, User } from '@prisma/client';
import { Request } from 'express';

import { AuthenticationError } from './utils/errors';

declare module 'express-session' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SessionData {
    userId?: string;
  }
}

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
      const user = await this.db.user.findUnique({ where: { apiKey: this.req.header('Authorization') } });
      if (user) {
        return user;
      }
    }
    if (userId) {
      const user = await this.db.user.findUnique({ where: { id: userId } });
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
