import { Formik, Form } from 'formik';
import { Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import * as Yup from 'yup';

import PasswordInput, { PasswordInputProps } from '.';

export default {
  title: 'PasswordInput',
  argTypes: {
    label: {
      defaultValue: 'password',
      control: { type: 'text' },
    },
    placeholder: {
      defaultValue: '',
      control: { type: 'text' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    required: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta;

const onSubmit = actions('onSubmit');

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short.'),
});

export const Basic = (args: PasswordInputProps): JSX.Element => (
  <Formik
    validationSchema={passwordSchema}
    initialValues={{ password: '' }}
    {...onSubmit}
  >
    <Form>
      <PasswordInput
        name="password"
        {...args}
      />
    </Form>
  </Formik>
);
