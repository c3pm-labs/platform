import { render } from '@testing-library/react';
import React from 'react';
import { Formik, Form } from 'formik';

import TextInput from '../index';

test('PasswordInput', () => {
  const { container } = render(
    <Formik
      initialValues={{ search: '' }}
      // eslint-disable-next-line no-console
      onSubmit={(): void => console.log('submited')}
    >
      <Form>
        <TextInput
          disableHelperText
          fullWidth
          name="search"
          type="search"
          placeholder="search..."
        />
      </Form>
    </Formik>,
  );

  expect(container).toMatchSnapshot();
});

test('PasswordInput disableHelperText false', () => {
  const { container } = render(
    <Formik
      initialValues={{ search: '' }}
      // eslint-disable-next-line no-console
      onSubmit={(): void => console.log('submited')}
    >
      <Form>
        <TextInput
          disableHelperText={false}
          fullWidth
          name="search"
          type="search"
          placeholder="search..."
        />
      </Form>
    </Formik>,
  );

  expect(container).toMatchSnapshot();
});
