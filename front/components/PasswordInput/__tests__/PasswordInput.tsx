import { render } from '@testing-library/react';
import * as Yup from 'yup';
import React from 'react';
import { Formik, Form } from 'formik';

import PasswordInput from '../index';

test('PasswordInput', () => {
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
        <PasswordInput name="password" />
      </Form>
    </Formik>,
  );

  expect(container).toMatchSnapshot();
});
