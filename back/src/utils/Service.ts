import { PrismaClient } from 'nexus-plugin-prisma/client';

import { SessionManager } from '../SessionManager';

export interface ServiceContext {
  db: PrismaClient;
  session: SessionManager;
}

export class Service {
  protected db: PrismaClient;

  protected session: SessionManager;

  constructor(ctx: ServiceContext) {
    this.db = ctx.db;
    this.session = ctx.session;
  }
}
