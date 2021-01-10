import Register from "../register";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import React from "react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("User Card", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Register />
    </MockedProvider>
  );

  const tree = component.toJSON();

  expect(tree.children).toMatchInlineSnapshot(`
    Array [
      <div
        className="makeStyles-rowContainer-3"
      >
        <a
          className="makeStyles-link-8"
          href="/"
          onClick={[Function]}
          onMouseEnter={[Function]}
        >
          <div
            className="makeStyles-logo-10"
          >
            <img
              alt="c3pm logo"
              height="auto"
              src="/assets/c3pm.png"
              width={300}
            />
          </div>
        </a>
      </div>,
      <div
        className="makeStyles-line-2"
      />,
      <div
        className="makeStyles-formContainer-4"
      >
        <h6
          className="MuiTypography-root makeStyles-text-6 MuiTypography-subtitle1"
        >
          Join the team
        </h6>
        <form
          action="#"
          className="makeStyles-input-5"
          noValidate={true}
          onReset={[Function]}
          onSubmit={[Function]}
        >
          <div
            className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
          >
            <label
              className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined Mui-required Mui-required"
              data-shrink={false}
            >
              username
              <span
                aria-hidden={true}
                className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
              >
                 
                *
              </span>
            </label>
            <div
              className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
              onClick={[Function]}
            >
              <input
                aria-invalid={false}
                autoFocus={false}
                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                disabled={false}
                name="username"
                onAnimationStart={[Function]}
                onBlur={[Function]}
                onChange={[Function]}
                onFocus={[Function]}
                required={true}
                type="text"
                value=""
              />
              <fieldset
                aria-hidden={true}
                className="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
              >
                <legend
                  className="PrivateNotchedOutline-legendLabelled-15"
                >
                  <span>
                    username
                     *
                  </span>
                </legend>
              </fieldset>
            </div>
            <p
              className="MuiFormHelperText-root makeStyles-root-12 MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense"
            >
              <span
                dangerouslySetInnerHTML={
                  Object {
                    "__html": "&#8203;",
                  }
                }
              />
            </p>
          </div>
          <div
            className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
          >
            <label
              className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined Mui-required Mui-required"
              data-shrink={false}
            >
              email
              <span
                aria-hidden={true}
                className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
              >
                 
                *
              </span>
            </label>
            <div
              className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
              onClick={[Function]}
            >
              <input
                aria-invalid={false}
                autoFocus={false}
                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                disabled={false}
                name="email"
                onAnimationStart={[Function]}
                onBlur={[Function]}
                onChange={[Function]}
                onFocus={[Function]}
                required={true}
                type="text"
                value=""
              />
              <fieldset
                aria-hidden={true}
                className="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
              >
                <legend
                  className="PrivateNotchedOutline-legendLabelled-15"
                >
                  <span>
                    email
                     *
                  </span>
                </legend>
              </fieldset>
            </div>
            <p
              className="MuiFormHelperText-root makeStyles-root-12 MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense"
            >
              <span
                dangerouslySetInnerHTML={
                  Object {
                    "__html": "&#8203;",
                  }
                }
              />
            </p>
          </div>
          <div
            className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
          >
            <label
              className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined Mui-required Mui-required"
              data-shrink={false}
            >
              password
              <span
                aria-hidden={true}
                className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
              >
                 
                *
              </span>
            </label>
            <div
              className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense"
              onClick={[Function]}
            >
              <input
                aria-invalid={false}
                autoFocus={false}
                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                disabled={false}
                name="password"
                onAnimationStart={[Function]}
                onBlur={[Function]}
                onChange={[Function]}
                onFocus={[Function]}
                required={true}
                type="password"
                value=""
              />
              <div
                className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-marginDense"
              >
                <button
                  aria-label="toggle password visibility"
                  className="MuiButtonBase-root MuiIconButton-root makeStyles-root-17 MuiIconButton-edgeEnd"
                  disabled={false}
                  onBlur={[Function]}
                  onClick={[Function]}
                  onDragLeave={[Function]}
                  onFocus={[Function]}
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                  onMouseDown={[Function]}
                  onMouseLeave={[Function]}
                  onMouseUp={[Function]}
                  onTouchEnd={[Function]}
                  onTouchMove={[Function]}
                  onTouchStart={[Function]}
                  tabIndex={0}
                  type="button"
                >
                  <span
                    className="MuiIconButton-label"
                  >
                    <svg
                      aria-hidden={true}
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <fieldset
                aria-hidden={true}
                className="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
              >
                <legend
                  className="PrivateNotchedOutline-legendLabelled-15"
                >
                  <span>
                    password
                     *
                  </span>
                </legend>
              </fieldset>
            </div>
            <p
              className="MuiFormHelperText-root makeStyles-root-12 MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense"
            >
              <span
                dangerouslySetInnerHTML={
                  Object {
                    "__html": "&#8203;",
                  }
                }
              />
            </p>
          </div>
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-18 makeStyles-primary-19 makeStyles-primary-23 MuiButton-disableElevation MuiButton-fullWidth"
            disabled={false}
            onBlur={[Function]}
            onDragLeave={[Function]}
            onFocus={[Function]}
            onKeyDown={[Function]}
            onKeyUp={[Function]}
            onMouseDown={[Function]}
            onMouseLeave={[Function]}
            onMouseUp={[Function]}
            onTouchEnd={[Function]}
            onTouchMove={[Function]}
            onTouchStart={[Function]}
            tabIndex={0}
            type="submit"
          >
            <span
              className="MuiButton-label"
            >
              Sign up
            </span>
          </button>
        </form>
        <span
          className="MuiTypography-root makeStyles-login-7 MuiTypography-caption"
        >
          Already have an account? 
          <a
            className="MuiTypography-root MuiLink-root MuiLink-underlineAlways MuiTypography-colorPrimary"
            href="/login"
            onBlur={[Function]}
            onClick={[Function]}
            onFocus={[Function]}
            onMouseEnter={[Function]}
          >
            Sign in
          </a>
        </span>
      </div>,
    ]
  `);
});
