/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";
import React from "react";
import { Formik, Form } from "formik";

import TextInput from "../index";

test("PasswordInput", () => {
  const { container } = render(
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(): void => console.log("submited")}
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
    </Formik>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <form
        action="#"
      >
        <div
          class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
        >
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <input
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputTypeSearch MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="search"
              name="search"
              placeholder="search..."
              type="search"
              value=""
            />
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
              style="padding-left: 8px;"
            >
              <legend
                class="PrivateNotchedOutline-legend-3"
                style="width: 0.01px;"
              >
                <span>
                  ​
                </span>
              </legend>
            </fieldset>
          </div>
          
        </div>
      </form>
    </div>
  `);
});

test("PasswordInput disableHelperText false", () => {
  const { container } = render(
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(): void => console.log("submited")}
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
    </Formik>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <form
        action="#"
      >
        <div
          class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
        >
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <input
              aria-describedby="search-helper-text"
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputTypeSearch MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="search"
              name="search"
              placeholder="search..."
              type="search"
              value=""
            />
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-7 MuiOutlinedInput-notchedOutline"
              style="padding-left: 8px;"
            >
              <legend
                class="PrivateNotchedOutline-legend-8"
                style="width: 0.01px;"
              >
                <span>
                  ​
                </span>
              </legend>
            </fieldset>
          </div>
          <p
            class="MuiFormHelperText-root makeStyles-root-6 MuiFormHelperText-contained MuiFormHelperText-marginDense"
            id="search-helper-text"
          >
            <span>
              ​
            </span>
          </p>
        </div>
      </form>
    </div>
  `);
});
