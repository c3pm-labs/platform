import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Formik, Form } from 'formik';

import Select from './index';

test('Select', () => {
  const options = [
    { value: 'gabriel', label: 'Gabriel' },
    { value: 'clement', label: 'Clément' },
    { value: 'itagiba', label: 'Itagiba' },
  ];

  const { getByTestId } = render(
    <Formik
      initialValues={{ user: options[0].value }}
      // eslint-disable-next-line no-console
      onSubmit={() => console.log('select')}
    >
      <Form>
        <Select name="user" options={options} />
      </Form>
    </Formik>,
  );

  const toggleButton = getByTestId('select');

  expect(toggleButton).not.toHaveClass('Mui-focused');
});

test('Select open', () => {
  const options = [
    { value: 'gabriel', label: 'Gabriel' },
    { value: 'clement', label: 'Clément' },
    { value: 'itagiba', label: 'Itagiba' },
  ];

  const { getByTestId } = render(
    <Formik
      initialValues={{ user: options[0].value }}
      // eslint-disable-next-line no-console
      onSubmit={() => console.log('select')}
    >
      <Form>
        <Select name="user" options={options} />
      </Form>
    </Formik>,
  );

  const toggleButton = getByTestId('select');
  userEvent.click(toggleButton);

  expect(toggleButton).toHaveClass('Mui-focused');
});
