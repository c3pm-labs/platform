import Register from "../register";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import React from "react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("User Card", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Register />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-1"
      >
        <div
          class="makeStyles-rowContainer-3"
        >
          <a
            class="makeStyles-link-8"
            href="/"
          >
            <div
              class="makeStyles-logo-10"
            >
              <img
                alt="c3pm logo"
                height="auto"
                src="/assets/c3pm.png"
                width="300"
              />
            </div>
          </a>
        </div>
        <div
          class="makeStyles-line-2"
        />
        <div
          class="makeStyles-formContainer-4"
        >
          <h6
            class="MuiTypography-root makeStyles-text-6 MuiTypography-subtitle1"
          >
            Join the team
          </h6>
          <form
            action="#"
            class="makeStyles-input-5"
            novalidate=""
          >
            <div
              class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
            >
              <label
                class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined Mui-required Mui-required"
                data-shrink="false"
              >
                username
                <span
                  aria-hidden="true"
                  class="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                >
                   
                  *
                </span>
              </label>
              <div
                class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
              >
                <input
                  aria-invalid="false"
                  class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                  name="username"
                  required=""
                  type="text"
                  value=""
                />
                <fieldset
                  aria-hidden="true"
                  class="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
                >
                  <legend
                    class="PrivateNotchedOutline-legendLabelled-15"
                  >
                    <span>
                      username
                       *
                    </span>
                  </legend>
                </fieldset>
              </div>
              <p
                class="MuiFormHelperText-root makeStyles-root-12 MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense"
              >
                <span>
                  ​
                </span>
              </p>
            </div>
            <div
              class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
            >
              <label
                class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined Mui-required Mui-required"
                data-shrink="false"
              >
                email
                <span
                  aria-hidden="true"
                  class="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                >
                   
                  *
                </span>
              </label>
              <div
                class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
              >
                <input
                  aria-invalid="false"
                  class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                  name="email"
                  required=""
                  type="text"
                  value=""
                />
                <fieldset
                  aria-hidden="true"
                  class="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
                >
                  <legend
                    class="PrivateNotchedOutline-legendLabelled-15"
                  >
                    <span>
                      email
                       *
                    </span>
                  </legend>
                </fieldset>
              </div>
              <p
                class="MuiFormHelperText-root makeStyles-root-12 MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense"
              >
                <span>
                  ​
                </span>
              </p>
            </div>
            <div
              class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
            >
              <label
                class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined Mui-required Mui-required"
                data-shrink="false"
              >
                password
                <span
                  aria-hidden="true"
                  class="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                >
                   
                  *
                </span>
              </label>
              <div
                class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense"
              >
                <input
                  aria-invalid="false"
                  class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                  name="password"
                  required=""
                  type="password"
                  value=""
                />
                <div
                  class="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-marginDense"
                >
                  <button
                    aria-label="toggle password visibility"
                    class="MuiButtonBase-root MuiIconButton-root makeStyles-root-17 MuiIconButton-edgeEnd"
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
                  class="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
                >
                  <legend
                    class="PrivateNotchedOutline-legendLabelled-15"
                  >
                    <span>
                      password
                       *
                    </span>
                  </legend>
                </fieldset>
              </div>
              <p
                class="MuiFormHelperText-root makeStyles-root-12 MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense"
              >
                <span>
                  ​
                </span>
              </p>
            </div>
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-18 makeStyles-primary-19 makeStyles-primary-23 MuiButton-disableElevation MuiButton-fullWidth"
              tabindex="0"
              type="submit"
            >
              <span
                class="MuiButton-label"
              >
                Sign up
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </form>
          <span
            class="MuiTypography-root makeStyles-login-7 MuiTypography-caption"
          >
            Already have an account? 
            <a
              class="MuiTypography-root MuiLink-root MuiLink-underlineAlways MuiTypography-colorPrimary"
              href="/login"
            >
              Sign in
            </a>
          </span>
        </div>
      </div>
    </div>
  `);
});
