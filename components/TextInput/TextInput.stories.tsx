import { Formik, Form } from 'formik';
import { Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import * as yup from 'yup';

import TextInput, { TextInputProps } from '.';

export default {
  title: 'TextInput',
  component: TextInput,
} as Meta;

const onSubmit = actions('onSubmit');

const testSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
});

export const Basic = (args: TextInputProps): JSX.Element => (
  <Formik
    validationSchema={testSchema}
    initialValues={{ email: '' }}
    {...onSubmit}
  >
    <Form>
      <TextInput
        {...args}
      />
    </Form>
  </Formik>
);

Basic.args = {
  name: 'email',
  label: 'email',
};

export const SearchBar = (): JSX.Element => (
  <Formik initialValues={{ search: '' }} {...onSubmit}>
    <Form>
      <TextInput
        name="search"
        placeholder="search..."
        type="search"
      />
    </Form>
  </Formik>
);
