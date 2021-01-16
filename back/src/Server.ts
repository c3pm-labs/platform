import http from 'http';

import session from 'express-session';
import express from 'express';
import env from 'env-var';
import cors from 'cors';

import graphqlMiddleware from './graphql';
import RESTMiddleware from './rest';
import db from './db';

class Server {
  server: http.Server;

  constructor() {
    const app = express();
    app.get('/', (req, res) => res.sendStatus(200));

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

    app.use(graphqlMiddleware);
    app.use(RESTMiddleware);

    this.server = http.createServer(app);
  }

  listen(port: number, cb?: () => void): http.Server {
    return this.server.listen({ port }, cb);
  }

  async stop(): Promise<void> {
    this.server.close();
    await db.$disconnect();
  }
}

export default Server;
