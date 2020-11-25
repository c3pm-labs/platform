import express, { Router } from 'express';
import { PrismaClient } from 'nexus-plugin-prisma/client';
import { ValidationError } from 'yup';

import * as errors from '../utils/errors';

import createUserRouter from './users/route';

const createRestMiddleware = (db: PrismaClient): Router => {
  const router = express.Router();
  const v1 = express.Router();

  router.use(express.json());
  router.use('/v1', v1);
  router.use((err, req, res, next) => {
    if (err instanceof errors.AuthenticationError) {
      res.status(401);
    } else if (err instanceof errors.ForbiddenError) {
      res.status(403);
    } else if (err instanceof ValidationError) {
      res.status(400);
    } else {
      res.status(500);
    }
    res.json({ error: err.message });
    next(err);
  });

  v1.use('/auth', createUserRouter(db));
  return router;
};

export default createRestMiddleware;
