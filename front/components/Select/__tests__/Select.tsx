import { render } from '@testing-library/react';
import React from 'react';
import { Formik, Form } from 'formik';

import Select from '../index';

test('Select', () => {
  const options = [
    { value: 'gabriel', label: 'Gabriel' },
    { value: 'clement', label: 'Clément' },
    { value: 'itagiba', label: 'Itagiba' },
  ];

  const { container } = render(
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

  expect(container).toMatchSnapshot();
});
