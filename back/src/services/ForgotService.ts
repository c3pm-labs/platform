import { v4 as uuidv4 } from 'uuid';
import { User } from '@prisma/client';
import sgMail from '@sendgrid/mail';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface ForgotPasswordParams {
  email?: string;
}

export class ForgotPasswordService extends Service {
  async forgotPassword({
    email,
  }: ForgotPasswordParams): Promise<User> {
    if (!email) {
      throw new UserInputError('Email argument is required.');
    }
    const token = uuidv4();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail.send({
      from: 'contact@c3pm.io',
      to: email,
      subject: 'Reset Password',
      text: 'Click on the link to reset your password',
      html: `<p>Click <a href='http://localhost:3000/reset_password?token=${token}'>here</a> to reset your password.</p>`,
    });
    return this.db.user.update({
      where: {
        email,
      },
      data: {
        resetPasswordToken: token,
      },
    });
  }
}
