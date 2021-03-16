import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Form, Formik } from 'formik';

import PasswordInput from '.';

test('PasswordInput toggle visibility', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <Formik
      initialValues={{ password: '' }}
      onSubmit={() => {}}
    >
      <Form>
        <PasswordInput placeholder="password" name="password" label="password" />
      </Form>
    </Formik>,
  );

  const input = getByPlaceholderText('password');
  expect(input).toHaveAttribute('type', 'password');

  const toggleButton = getByTestId('iconPasswordVisibility');
  userEvent.click(toggleButton);

  expect(input).toHaveAttribute('type', 'text');
});
