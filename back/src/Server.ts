import http from 'http';

import { PrismaClient } from 'nexus-plugin-prisma/client';
import session from 'express-session';
import express from 'express';
import env from 'env-var';
import cors from 'cors';

import { getGraphqlMiddleware } from './graphql';
import createRestMiddleware from './rest';

class Server {
  db: PrismaClient;

  server: http.Server;

  constructor(db: PrismaClient) {
    this.db = db;

    const app = express();

    const ALLOWED_ORIGIN = env.get('ALLOWED_ORIGIN').required().asString();
    app.use(cors({
      credentials: true,
      origin: new RegExp(ALLOWED_ORIGIN),
    }));

    if (env.get('NODE_ENV').asString() === 'production') {
      app.set('trust proxy', 1);
    }

    const SESSION_SECRET = env.get('SESSION_SECRET').required().asString();
    app.use(session({
      secret: SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        secure: env.get('NODE_ENV').asString() === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        sameSite: env.get('NODE_ENV').asString() === 'production' ? 'none' : undefined,
      },
    }));
    const graphqlMiddleware = getGraphqlMiddleware(this.db);
    app.use(graphqlMiddleware);
    const restMiddleware = createRestMiddleware(this.db);
    app.use(restMiddleware);

    this.server = http.createServer(app);
  }

  listen(port: number, cb?: () => void): http.Server {
    return this.server.listen({ port }, cb);
  }

  async stop(): Promise<void> {
    this.server.close();
    await this.db.$disconnect();
  }
}

export default Server;
