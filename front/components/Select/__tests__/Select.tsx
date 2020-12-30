/* eslint-disable import/no-extraneous-dependencies */
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
      onSubmit={() => console.log('select')}
    >
      <Form>
        <Select name="user" options={options} />
      </Form>
    </Formik>,
  );

  expect(container).toMatchInlineSnapshot(
    `
    <div>
      <form
        action="#"
      >
        <div
          class="MuiFormControl-root makeStyles-default-1"
        >
          <div
            class="MuiInputBase-root MuiInput-root makeStyles-default-1 MuiInputBase-formControl MuiInput-formControl"
          >
            <div
              aria-haspopup="listbox"
              aria-labelledby="mui-component-select-user"
              class="MuiSelect-root makeStyles-root-3 MuiSelect-select makeStyles-select-4 MuiSelect-selectMenu MuiInputBase-input MuiInput-input"
              id="mui-component-select-user"
              role="button"
              tabindex="0"
            >
              <div
                class="makeStyles-container-6"
              >
                Gabriel
              </div>
            </div>
            <input
              aria-hidden="true"
              class="MuiSelect-nativeInput"
              name="user"
              tabindex="-1"
              value="gabriel"
            />
            <svg
              aria-hidden="true"
              class="MuiSvgIcon-root MuiSelect-icon makeStyles-icon-2"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  `,
  );
});
