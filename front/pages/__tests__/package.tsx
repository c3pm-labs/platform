import PackageDetails from "../package/[...params]";
import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import { render } from "@testing-library/react";

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

test("PackageDetails", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: { pathname: "", params: "math" },
    asPath: "",
  }));

  const props = { _documentProps: "" } as any;

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PackageDetails {...props} />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-15"
      >
        <header
          class="MuiPaper-root MuiAppBar-root MuiAppBar-positionSticky MuiAppBar-colorDefault makeStyles-appBar-16 MuiPaper-elevation0"
        >
          <div
            class="MuiToolbar-root MuiToolbar-regular makeStyles-container-17 MuiToolbar-gutters"
          >
            <div
              class="PrivateHiddenCss-smUp-23"
            >
              <a
                class="makeStyles-link-34"
                href="/"
              >
                <div
                  class="makeStyles-logo-36"
                >
                  <img
                    alt="c3pm logo"
                    height="40"
                    src="/assets/c3pm_3.png"
                    width="auto"
                  />
                </div>
              </a>
            </div>
            <div
              class="PrivateHiddenCss-xsDown-21"
            >
              <a
                class="makeStyles-link-34"
                href="/"
              >
                <div
                  class="makeStyles-logo-36"
                >
                  <img
                    alt="c3pm logo"
                    height="auto"
                    src="/assets/c3pm.png"
                    width="100"
                  />
                </div>
              </a>
            </div>
            <form
              action="#"
              class="makeStyles-search-18"
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
                    name="search"
                    placeholder="search..."
                    type="search"
                    value=""
                  />
                  <fieldset
                    aria-hidden="true"
                    class="PrivateNotchedOutline-root-40 MuiOutlinedInput-notchedOutline"
                    style="padding-left: 8px;"
                  >
                    <legend
                      class="PrivateNotchedOutline-legend-41"
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
            <div>
              <a
                aria-disabled="false"
                class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-default-46 makeStyles-primary-47 makeStyles-primary-51 makeStyles-marginRight-45 MuiButton-disableElevation"
                href="/login"
                tabindex="0"
              >
                <span
                  class="MuiButton-label"
                >
                  Sign in
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </a>
              <a
                aria-disabled="false"
                class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-46 makeStyles-primary-47 makeStyles-primary-55 MuiButton-disableElevation"
                href="/register"
                tabindex="0"
              >
                <span
                  class="MuiButton-label"
                >
                  Sign up
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </a>
            </div>
          </div>
        </header>
        <span>
          Loading...
        </span>
      </div>
      <div
        class="makeStyles-container-59"
      >
        <div
          class="makeStyles-textContainer-60"
        >
          <span>
            General Information
          </span>
          <a
            class="makeStyles-text-61"
            href="https://docs.c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-61 MuiTypography-body1"
            >
              Docs
            </p>
          </a>
          <a
            class="makeStyles-text-61"
            href="https://github.com/c3pm-labs/"
          >
            <p
              class="MuiTypography-root makeStyles-text-61 MuiTypography-body1"
            >
              Github
            </p>
          </a>
          <a
            class="makeStyles-text-61"
            href="https://github.com/c3pm-labs/c3pm/releases"
          >
            <p
              class="MuiTypography-root makeStyles-text-61 MuiTypography-body1"
            >
              Releases
            </p>
          </a>
        </div>
        <div
          class="makeStyles-textContainer-60"
        >
          <span>
            Contact us
          </span>
          <a
            class="makeStyles-text-61"
            href="mailto:contact@c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-61 MuiTypography-body1"
            >
              contact@c3pm.io
            </p>
          </a>
          <a
            class="makeStyles-text-61"
            href="https://github.com/c3pm-labs/c3pm/issues/new"
          >
            <p
              class="MuiTypography-root makeStyles-text-61 MuiTypography-body1"
            >
              Issues
            </p>
          </a>
          <a
            class="makeStyles-text-61"
            href="/team"
          >
            Team
          </a>
        </div>
      </div>
    </div>
  `);
});
