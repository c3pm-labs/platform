import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Formik, Form } from 'formik';
import faker from "faker";

import Select from './index';

test('Select open', () => {
  const options = [
    { value: faker.lorem.word(), label: faker.lorem.word() },
    { value: faker.lorem.word(), label: faker.lorem.word() },
    { value: faker.lorem.word(), label: faker.lorem.word() },
  ];

  render(
    <Formik
      initialValues={{ user: options[0].value }}
      // eslint-disable-next-line no-console
      onSubmit={() => {return}}
    >
      <Form>
        <Select name="user" options={options} />
      </Form>
    </Formik>,
  );

  const lisbox = screen.queryByRole('listbox');
  expect(lisbox).toBe(null);

  const toggleButton = screen.queryByRole('button');
  userEvent.click(toggleButton);

  const lisboxAfterClick = screen.queryByRole('listbox');
  expect(lisboxAfterClick).toBeDefined();
});
