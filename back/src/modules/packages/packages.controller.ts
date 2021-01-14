import { Router } from 'express';
import multer from 'multer';

import db from '../../db';
import createContext from '../../rest/createContext';

import * as packagesService from './packages.service';

const packagesController = Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
});

packagesController.post('/publish', upload.any(), async (req, res) => {
  const ctx = createContext({ db, req });

  try {
    await packagesService.publish(ctx, req.files[0]);
    res.status(200).end();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error: ', e);
    res.status(401).json({ message: e.message });
  }
});

export default packagesController;
