import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

import { Context } from '../context';
import { SessionManager } from '../SessionManager';

const createContext = ({ db, req }: { db: PrismaClient, req: Request }): Context => {
  const session = new SessionManager(req);
  return ({
    db,
    session,
  });
};

export default createContext;
