import Team from "../team";
import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("Team", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Team />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-8"
      >
        <header
          class="MuiPaper-root MuiAppBar-root MuiAppBar-positionSticky MuiAppBar-colorDefault makeStyles-appBar-9 MuiPaper-elevation0"
        >
          <div
            class="MuiToolbar-root MuiToolbar-regular makeStyles-container-10 MuiToolbar-gutters"
          >
            <div
              class="PrivateHiddenCss-smUp-16"
            >
              <a
                class="makeStyles-link-27"
                href="/"
              >
                <div
                  class="makeStyles-logo-29"
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
              class="PrivateHiddenCss-xsDown-14"
            >
              <a
                class="makeStyles-link-27"
                href="/"
              >
                <div
                  class="makeStyles-logo-29"
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
              class="makeStyles-search-11"
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
                    class="PrivateNotchedOutline-root-33 MuiOutlinedInput-notchedOutline"
                    style="padding-left: 8px;"
                  >
                    <legend
                      class="PrivateNotchedOutline-legend-34"
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
                class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-default-39 makeStyles-primary-40 makeStyles-primary-44 makeStyles-marginRight-38 MuiButton-disableElevation"
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
                class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-39 makeStyles-primary-40 makeStyles-primary-48 MuiButton-disableElevation"
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
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/37226221?s=400&u=c1ccb83c39c35ab12b3b9424fb1cf895c11ff0b2&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Clément Dubois
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/ClementDBS"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/33499903?s=400&u=0f7ee065478bf2e6bc27df563e41a2b6a2d9eaac&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Gabriel Colson
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://twitter.com/gabrielcolson_"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(29, 161, 242);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/gabrielcolson"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/31325038?s=400&u=f264ab527f6a221200132ef762a4ed530dedfa45&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Maxime Corbin
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/Oursin"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/12870834?s=400&u=c132f461d54c2b8159f39ff429c64c90b532ff75&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Jules Casteran
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/Codelax"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/33450831?s=400&u=56c57820a897e8539b4d778693077e0740df885f&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Angela Boyadjian
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/angela-boyadjian"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/37624013?s=400&u=51740ef5e13f2633d1185be22446d6a367e70be7&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Mina Barry
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/MinaBarry"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/36671782?s=400&u=cefeea59eab3a014d5603dac4b6fe51f830ceb66&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Itagiba Alix
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/ItagibaALIX"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-profileCard-2"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-avatar-3"
            >
              <img
                alt="member avatar"
                class="MuiAvatar-img"
                src="https://avatars2.githubusercontent.com/u/37622266?s=460&u=d785567e52d1d10ca755a0ff5c8252ecfd851a15&v=4"
              />
            </div>
            <span
              class="makeStyles-name-4"
            >
              Chloé Bourbion
            </span>
            <div
              class="makeStyles-links-5"
            >
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://www.linkedin.com/in/chlo%C3%A9-bourbion-0a7452156/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(40, 103, 178);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="makeStyles-link-6"
              >
                <a
                  href="https://github.com/chloebourbion"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-icon-7"
                    focusable="false"
                    style="color: rgb(0, 0, 0);"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="makeStyles-container-52"
      >
        <div
          class="makeStyles-textContainer-53"
        >
          <span>
            General Information
          </span>
          <a
            class="makeStyles-text-54"
            href="https://docs.c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-54 MuiTypography-body1"
            >
              Docs
            </p>
          </a>
          <a
            class="makeStyles-text-54"
            href="https://github.com/c3pm-labs/"
          >
            <p
              class="MuiTypography-root makeStyles-text-54 MuiTypography-body1"
            >
              Github
            </p>
          </a>
          <a
            class="makeStyles-text-54"
            href="https://github.com/c3pm-labs/c3pm/releases"
          >
            <p
              class="MuiTypography-root makeStyles-text-54 MuiTypography-body1"
            >
              Releases
            </p>
          </a>
        </div>
        <div
          class="makeStyles-textContainer-53"
        >
          <span>
            Contact us
          </span>
          <a
            class="makeStyles-text-54"
            href="mailto:contact@c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-54 MuiTypography-body1"
            >
              contact@c3pm.io
            </p>
          </a>
          <a
            class="makeStyles-text-54"
            href="https://github.com/c3pm-labs/c3pm/issues/new"
          >
            <p
              class="MuiTypography-root makeStyles-text-54 MuiTypography-body1"
            >
              Issues
            </p>
          </a>
          <a
            class="makeStyles-text-54"
            href="/team"
          >
            Team
          </a>
        </div>
      </div>
    </div>
  `);
});
