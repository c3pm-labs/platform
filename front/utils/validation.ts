import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  login: Yup.string().required('errors.emailOrUsername'),
  password: Yup.string().required('errors.password'),
});

export type LoginParams = Yup.InferType<typeof loginSchema>;

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('errors.username'),
  email: Yup.string().email('errors.invalidEmail').required('errors.email'),
  password: Yup.string()
    .required('errors.password')
    .min(8, 'errors.invalidPassword'),
});

export type RegisterParams = Yup.InferType<typeof registerSchema>;

export const forgotSchema = Yup.object().shape({
  email: Yup.string().email('errors.invalidEmail').required('errors.email'),
});

export type ForgotParams = Yup.InferType<typeof forgotSchema>;

export const contactFormSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

export const resetSchema = Yup.object().shape({
  password: Yup.string()
    .required('errors.password')
    .min(8, 'errors.invalidPassword'),
  confirm: Yup.string()
    .required('errors.confirmation')
    .oneOf([Yup.ref('password'), null], 'errors.samePassword'),
});

export type ResetParams = Yup.InferType<typeof resetSchema>;
