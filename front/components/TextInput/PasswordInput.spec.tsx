import { render, screen } from '@testing-library/react';
import React from 'react';
import { Formik, Form } from 'formik';

import TextInput from './index';

test('PasswordInput', () => {
  render(
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

  const input = screen.getByPlaceholderText('search...');
  expect(input).not.toHaveAttribute('aria-describedby', 'search-helper-text');
});

test('PasswordInput disableHelperText false', () => {
  render(
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

  const input = screen.getByPlaceholderText('search...');
  expect(input).toHaveAttribute('aria-describedby', 'search-helper-text');
});
