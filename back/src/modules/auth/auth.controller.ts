import { Router } from 'express';
import * as yup from 'yup';

import createContext from '../../rest/createContext';
import db from '../../db';

import * as authService from './auth.service';

const authController = Router();

authController.post('/login', async (req, res) => {
  const schema = yup.object().shape({
    login: yup.string().required('Email or username is required'),
    password: yup.string().required('Password is required'),
  });
  await schema.validate(req.body);

  const ctx = createContext({ db, req });
  const { login, password } = req.body;
  const user = await authService.login(ctx, { login, password });

  res.status(200).json({ apiKey: user.apiKey });
});

export default authController;
