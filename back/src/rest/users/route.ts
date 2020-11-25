import express, { Router } from 'express';
import multer from 'multer';
import { PrismaClient } from 'nexus-plugin-prisma/client';
import * as yup from 'yup';

import { AuthService } from '../../services/AuthService';
import createContext from '../createContext';
import { PublishService } from '../../services/PublishService';
import { SessionManager } from '../../SessionManager';

require('express-async-errors');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
});

const createUserRouter = (db: PrismaClient): Router => {
  const userRouter = express.Router();

  userRouter.post('/login', async (req, res) => {
    const schema = yup.object().shape({
      login: yup.string().required('Email or username is required'),
      password: yup.string().required('Password is required'),
    });
    await schema.validate(req.body);

    const ctx = createContext({ db, req });
    const { login, password } = req.body;
    const authService = new AuthService(ctx);
    const user = await authService.login({ login, password });

    res.status(200).json({ apiKey: user.apiKey });
  });

  userRouter.post('/publish', upload.any(), async (req, res) => {
    const session = new SessionManager(db, req);
    const publishService = new PublishService({ db, session });

    try {
      await publishService.publish(req.files[0]);
      res.status(200).end();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('error: ', e);
      res.status(401).json({ message: e.message });
    }
  });
  return userRouter;
};

export default createUserRouter;
