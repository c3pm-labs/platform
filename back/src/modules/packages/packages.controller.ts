import { Router } from 'express';
import multer from 'multer';

import db from '../../db';
import createContext from '../../rest/createContext';

import * as packagesService from './packages.service';

require('express-async-errors');

const packagesController = Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
});

packagesController.post('/publish', upload.any(), async (req, res) => {
  const ctx = createContext({ db, req });

  await packagesService.publish(ctx, req.files[0]);
  res.status(200).end();
});

packagesController.post('/countDownloads', async (req, res) => {
  const ctx = createContext({ db, req });

  await packagesService.countDownloads(ctx, req.body.packageName);
  res.status(200).end();
});

export default packagesController;
