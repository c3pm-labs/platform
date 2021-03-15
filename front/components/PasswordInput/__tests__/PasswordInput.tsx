import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import * as Yup from 'yup';
import React from 'react';
import { Formik, Form } from 'formik';

import PasswordInput from '../index';

test('PasswordInput unseen', () => {
  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short.'),
  });

  const { container } = render(
    <Formik
      validationSchema={passwordSchema}
      initialValues={{ password: '' }}
      // eslint-disable-next-line no-console
      onSubmit={(): void => console.log('submited')}
    >
      <Form>
        <PasswordInput name="password" label="toto" />
      </Form>
    </Formik>,
  );

  expect(container).toMatchSnapshot();
});


test('PasswordInput visible', () => {
  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short.'),
  });

  const { container } = render(
    <Formik
      validationSchema={passwordSchema}
      initialValues={{ password: '' }}
      // eslint-disable-next-line no-console
      onSubmit={(): void => console.log('submited')}
    >
      <Form>
        <PasswordInput name="password" label="toto" />
      </Form>
    </Formik>,
  );

  userEvent.click(screen.getByTestId('iconPasswordVisibility'))
  expect(container).toMatchSnapshot();
});
