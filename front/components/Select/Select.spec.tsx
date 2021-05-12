import React from 'react';
import userEvent from '@testing-library/user-event';
import { Formik, Form } from 'formik';

import { render, screen } from 'utils/test/customRender';
import { optionsBuilder } from 'utils/test/builder';

import Select from './index';

const fakeOptions = optionsBuilder();

test('Select open', () => {
  render(
    <Formik
      initialValues={{ user: fakeOptions[0].value }}
      onSubmit={() => {}}
    >
      <Form>
        <Select name="user" options={fakeOptions} />
      </Form>
    </Formik>,
  );

  const lisbox = screen.queryByRole('listbox');
  expect(lisbox).not.toBeInTheDocument();

  const toggleButton = screen.queryByRole('button');
  userEvent.click(toggleButton);

  const lisboxAfterClick = screen.queryByRole('listbox');
  expect(lisboxAfterClick).toBeInTheDocument();

  const menu = screen.queryByRole('presentation');
  expect(menu).toBeInTheDocument();
});
