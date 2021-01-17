import UserCard from "../index";
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
      <UserCard />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-1"
      >
        <header
          class="MuiPaper-root MuiAppBar-root MuiAppBar-positionSticky MuiAppBar-colorDefault makeStyles-appBar-2 MuiPaper-elevation0"
        >
          <div
            class="MuiToolbar-root MuiToolbar-regular makeStyles-container-3 MuiToolbar-gutters"
          >
            <div
              class="PrivateHiddenCss-smUp-9"
            >
              <a
                class="makeStyles-link-20"
                href="/"
              >
                <div
                  class="makeStyles-logo-22"
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
              class="PrivateHiddenCss-xsDown-7"
            >
              <a
                class="makeStyles-link-20"
                href="/"
              >
                <div
                  class="makeStyles-logo-22"
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
              class="makeStyles-search-4"
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
                    class="PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline"
                    style="padding-left: 8px;"
                  >
                    <legend
                      class="PrivateNotchedOutline-legend-27"
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
                class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-default-32 makeStyles-primary-33 makeStyles-primary-37 makeStyles-marginRight-31 MuiButton-disableElevation"
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
                class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-32 makeStyles-primary-33 makeStyles-primary-41 MuiButton-disableElevation"
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
          class="makeStyles-container-45"
        >
          <div
            class="makeStyles-containerMainInfo-46"
          >
            <div
              class="PrivateHiddenCss-mdDown-13"
            >
              <a
                class="makeStyles-link-20"
                href="/"
              >
                <div
                  class="makeStyles-logo-22"
                >
                  <img
                    alt="c3pm logo"
                    height="auto"
                    src="/assets/c3pm.png"
                    width="600"
                  />
                  <p
                    class="MuiTypography-root makeStyles-baseline-21 makeStyles-baseline-51 MuiTypography-body1"
                  >
                    C++ Package Manager
                  </p>
                </div>
              </a>
            </div>
            <div
              class="PrivateHiddenCss-lgUp-15"
            >
              <a
                class="makeStyles-link-20"
                href="/"
              >
                <div
                  class="makeStyles-logo-22"
                >
                  <img
                    alt="c3pm logo"
                    height="auto"
                    src="/assets/c3pm.png"
                    width="300"
                  />
                  <p
                    class="MuiTypography-root makeStyles-baseline-21 makeStyles-baseline-52 MuiTypography-body1"
                  >
                    C++ Package Manager
                  </p>
                </div>
              </a>
            </div>
            <div
              class="makeStyles-minSpacingFantom-50"
            />
            <p
              class="MuiTypography-root makeStyles-styleBaseline-47 makeStyles-defaultStyleText-49 MuiTypography-body1"
            >
              Your toolkit to dive into C++ easily
            </p>
            <div
              class="makeStyles-minSpacingFantom-50"
            />
            <div
              class="makeStyles-containerButton-53"
            >
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  <p
                    class="MuiTypography-root makeStyles-getStartedButton-54 makeStyles-defaultStyleText-57 makeStyles-defaultStyleButton-58 MuiTypography-body1"
                  >
                    Get started
                  </p>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
              <div
                class="makeStyles-minSpacingFantom-59"
              />
              <a>
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-overRideColorLearnMoreButton-56 MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiButton-label"
                  >
                    <p
                      class="MuiTypography-root makeStyles-leanMoreButton-55 makeStyles-defaultStyleText-57 makeStyles-defaultStyleButton-58 MuiTypography-body1"
                    >
                      Learn More
                    </p>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </a>
            </div>
          </div>
          <p
            class="MuiTypography-root makeStyles-styleDefinitionC3PM-48 makeStyles-defaultStyleText-49 MuiTypography-body1"
          >
            C++ made easy | Trivial dependency managment | Package sharing
          </p>
        </div>
        <div
          name="whyc3pm"
        >
          <div
            id="whyc3pm"
          >
            <p
              class="MuiTypography-root makeStyles-title-65 MuiTypography-body1"
            >
              Why c3pm ?
            </p>
            <div
              class="makeStyles-container-60"
            >
              <img
                alt="demogif"
                class="makeStyles-demoGif-61"
                src="/assets/demo.gif"
              />
              <div
                class="makeStyles-infoCard-62"
              >
                <div
                  class="makeStyles-container-66"
                >
                  <p
                    class="MuiTypography-root makeStyles-titleStyle-68 MuiTypography-body1"
                  >
                    C++ made easy
                  </p>
                  <p
                    class="MuiTypography-root makeStyles-descriptionStyle-69 MuiTypography-body1"
                  >
                    With c3pm, start your cross-platform project with 0 configuration. It has never been so simple!
                  </p>
                  <button
                    class="makeStyles-buttonLink-70"
                    type="button"
                  >
                    <p
                      class="MuiTypography-root makeStyles-textLinkStyle-67 MuiTypography-body1"
                    >
                      Learn c3pm
                    </p>
                  </button>
                </div>
                <div
                  class="makeStyles-container-66"
                >
                  <p
                    class="MuiTypography-root makeStyles-titleStyle-68 MuiTypography-body1"
                  >
                    Trivial Dependency management
                  </p>
                  <p
                    class="MuiTypography-root makeStyles-descriptionStyle-69 MuiTypography-body1"
                  >
                    c3pm will manage the dependencies for you! No more hours spent installing a simple library: one command and you’re good to go!
                  </p>
                  <button
                    class="makeStyles-buttonLink-70"
                    type="button"
                  >
                    <p
                      class="MuiTypography-root makeStyles-textLinkStyle-67 MuiTypography-body1"
                    >
                      View full documentation
                    </p>
                  </button>
                </div>
                <div
                  class="makeStyles-container-66"
                >
                  <p
                    class="MuiTypography-root makeStyles-titleStyle-68 MuiTypography-body1"
                  >
                    Package sharing
                  </p>
                  <p
                    class="MuiTypography-root makeStyles-descriptionStyle-69 MuiTypography-body1"
                  >
                    c3pm is, before all, a package manager. You can share a reusable piece of code with the entire community!
                  </p>
                  <button
                    class="makeStyles-buttonLink-70"
                    type="button"
                  >
                    <p
                      class="MuiTypography-root makeStyles-textLinkStyle-67 MuiTypography-body1"
                    >
                      Browse packages
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="makeStyles-button-63"
            >
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  <p
                    class="MuiTypography-root makeStyles-startLearningButton-64 MuiTypography-body1"
                  >
                    Start Learning
                  </p>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          class="makeStyles-container-71"
        >
          <div
            class="makeStyles-containerLines-78"
          >
            <p
              class="MuiTypography-root makeStyles-styleQuestion-73 makeStyles-defaultStyleText-72 MuiTypography-body1"
            >
              Install c3pm today.
            </p>
            <p
              class="MuiTypography-root makeStyles-subBaseline-76 makeStyles-defaultStyleText-72 MuiTypography-body1"
            >
              It’s free and open source.
            </p>
            <div
              class="makeStyles-minSpacingFantom-74"
            />
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiButton-label"
              >
                <p
                  class="MuiTypography-root makeStyles-getStartedButton-75 makeStyles-defaultStyleText-72 MuiTypography-body1"
                >
                  Get started
                </p>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        class="makeStyles-container-79"
      >
        <div
          class="makeStyles-textContainer-80"
        >
          <span>
            General Information
          </span>
          <a
            class="makeStyles-text-81"
            href="https://docs.c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-81 MuiTypography-body1"
            >
              Docs
            </p>
          </a>
          <a
            class="makeStyles-text-81"
            href="https://github.com/c3pm-labs/"
          >
            <p
              class="MuiTypography-root makeStyles-text-81 MuiTypography-body1"
            >
              Github
            </p>
          </a>
          <a
            class="makeStyles-text-81"
            href="https://github.com/c3pm-labs/c3pm/releases"
          >
            <p
              class="MuiTypography-root makeStyles-text-81 MuiTypography-body1"
            >
              Releases
            </p>
          </a>
        </div>
        <div
          class="makeStyles-textContainer-80"
        >
          <span>
            Contact us
          </span>
          <a
            class="makeStyles-text-81"
            href="mailto:contact@c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-81 MuiTypography-body1"
            >
              contact@c3pm.io
            </p>
          </a>
          <a
            class="makeStyles-text-81"
            href="https://github.com/c3pm-labs/c3pm/issues/new"
          >
            <p
              class="MuiTypography-root makeStyles-text-81 MuiTypography-body1"
            >
              Issues
            </p>
          </a>
          <a
            class="makeStyles-text-81"
            href="/team"
          >
            Team
          </a>
        </div>
      </div>
    </div>
  `);
});