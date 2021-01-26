import PackageDetails from "../package/[...params]";
import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useQuery = jest.spyOn(require("@apollo/client"), "useQuery");

test("PackageDetails", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    query: { pathname: "", params: "math" },
    asPath: "",
  }));

  useQuery.mockImplementation(() => ({
    data: {
      version: {
        package: {
          name: "simple-math",
          latest: { publishedAt: "" },
          author: { id: "" },
        },
      },
      publishedAt: "",
      description: "",
      readme: "",
    },
    loading: false,
  }));

  const props = {} as any;

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
                    alt="mini-sm c3pm logo"
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
                    alt="classic-sm c3pm logo"
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
                    id="search"
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
        <div
          class="makeStyles-container-1"
        >
          <div
            class="makeStyles-header-3"
          >
            <div
              class="makeStyles-spaceBetween-14 makeStyles-line-11"
            >
              <div
                class="makeStyles-widthAuto-12 makeStyles-line-11"
              >
                <h1
                  data-testid="name"
                >
                  simple-math
                </h1>
                <span
                  class="makeStyles-version-4"
                  data-testid="version"
                >
                  v
                </span>
              </div>
              <button
                class="makeStyles-add-59"
                title="copy"
                type="button"
              >
                $ 
                ctpm add simple-math
              </button>
            </div>
            <div
              class="makeStyles-description-5"
            />
            <div
              class="makeStyles-line-11 makeStyles-alignCenter-13"
            >
              <span
                class="makeStyles-update-6"
              >
                Last updated on 
                Invalid Date
              </span>
              <div
                class="makeStyles-separator-10"
              />
              <a
                class="makeStyles-avatar-7"
                data-testid="author"
                href="/user/"
              >
                <div
                  class="makeStyles-container-60 makeStyles-avatar-7"
                >
                  <div
                    class="MuiAvatar-root MuiAvatar-circle makeStyles-picture-61 makeStyles-picture-63 makeStyles-picture-8 MuiAvatar-colorDefault"
                    data-testid="user-avatar"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiAvatar-fallback"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </div>
                  <p
                    class="MuiTypography-root makeStyles-name-62 makeStyles-name-9 MuiTypography-body1"
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            class="MuiTabs-root makeStyles-tab-2"
          >
            <div
              class="MuiTabs-scroller MuiTabs-fixed"
              style="overflow: hidden;"
            >
              <div
                aria-label="package tabs"
                class="MuiTabs-flexContainer"
                role="tablist"
              >
                <button
                  aria-controls="package-tabpanel-1"
                  aria-selected="true"
                  class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit Mui-selected"
                  id="package-tab-1"
                  role="tab"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiTab-wrapper"
                  >
                    Readme
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
                <button
                  aria-controls="package-tabpanel-2"
                  aria-selected="false"
                  class="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"
                  id="package-tab-2"
                  role="tab"
                  tabindex="-1"
                  type="button"
                >
                  <span
                    class="MuiTab-wrapper"
                  >
                    Versions
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
              <span
                class="PrivateTabIndicator-root-64 PrivateTabIndicator-colorSecondary-66 MuiTabs-indicator"
                style="left: 0px; width: 0px;"
              />
            </div>
          </div>
          <div
            aria-labelledby="simple-tab-0"
            id="simple-tabpanel-0"
            role="tabpanel"
          >
            <div
              class="makeStyles-readme-68"
            />
          </div>
          <div
            aria-labelledby="simple-tab-1"
            hidden=""
            id="simple-tabpanel-1"
            role="tabpanel"
          />
        </div>
      </div>
      <div
        class="makeStyles-container-69"
      >
        <div
          class="makeStyles-textContainer-70"
        >
          <span>
            General Information
          </span>
          <a
            class="makeStyles-text-71"
            href="https://docs.c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-71 MuiTypography-body1"
            >
              Docs
            </p>
          </a>
          <a
            class="makeStyles-text-71"
            href="https://github.com/c3pm-labs/"
          >
            <p
              class="MuiTypography-root makeStyles-text-71 MuiTypography-body1"
            >
              Github
            </p>
          </a>
          <a
            class="makeStyles-text-71"
            href="https://github.com/c3pm-labs/c3pm/releases"
          >
            <p
              class="MuiTypography-root makeStyles-text-71 MuiTypography-body1"
            >
              Releases
            </p>
          </a>
        </div>
        <div
          class="makeStyles-textContainer-70"
        >
          <span>
            Contact us
          </span>
          <a
            class="makeStyles-text-71"
            href="mailto:contact@c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-71 MuiTypography-body1"
            >
              contact@c3pm.io
            </p>
          </a>
          <a
            class="makeStyles-text-71"
            href="https://github.com/c3pm-labs/c3pm/issues/new"
          >
            <p
              class="MuiTypography-root makeStyles-text-71 MuiTypography-body1"
            >
              Issues
            </p>
          </a>
          <a
            class="makeStyles-text-71"
            href="/team"
          >
            Team
          </a>
        </div>
      </div>
    </div>
  `);
});
