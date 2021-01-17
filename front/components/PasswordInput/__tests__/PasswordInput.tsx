/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";
import * as Yup from "yup";
import React from "react";
import { Formik, Form } from "formik";

import PasswordInput from "../index";

test("PasswordInput", () => {
  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short."),
  });

  const { container } = render(
    <Formik
      validationSchema={passwordSchema}
      initialValues={{ password: "" }}
      onSubmit={(): void => console.log("submited")}
    >
      <Form>
        <PasswordInput name="password" />
      </Form>
    </Formik>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <form
        action="#"
      >
        <div
          class="MuiFormControl-root MuiTextField-root"
        >
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <input
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              name="password"
              type="password"
              value=""
            />
            <div
              class="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-marginDense"
            >
              <button
                aria-label="toggle password visibility"
                class="MuiButtonBase-root MuiIconButton-root makeStyles-root-1 MuiIconButton-edgeEnd"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiIconButton-label"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                    />
                  </svg>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-3 MuiOutlinedInput-notchedOutline"
              style="padding-left: 8px;"
            >
              <legend
                class="PrivateNotchedOutline-legend-4"
                style="width: 0.01px;"
              >
                <span>
                  ​
                </span>
              </legend>
            </fieldset>
          </div>
          <p
            class="MuiFormHelperText-root makeStyles-root-2 MuiFormHelperText-contained MuiFormHelperText-marginDense"
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