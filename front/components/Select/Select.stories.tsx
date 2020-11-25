import React from 'react';
import { Formik, Form } from 'formik';
import { Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Select from '.';

export default {
  title: 'Select',
} as Meta;

const onSubmit = actions('onSubmit');

const options = [
  { value: 'gabriel', label: 'Gabriel' },
  { value: 'clement', label: 'Clément' },
  { value: 'itagiba', label: 'Itagiba' },
];

export const Basic = (): JSX.Element => (
  <Formik
    initialValues={{ user: options[0].value }}
    {...onSubmit}
  >
    <Form>
      <Select name="user" options={options} />
    </Form>
  </Formik>
);
