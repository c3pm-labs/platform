/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";

import Home from "../index";

test("Home", () => {
  const { container } = render(<Home />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-1"
      >
        <div
          class="makeStyles-containerMainInfo-2"
        >
          <div
            class="PrivateHiddenCss-mdDown-15"
          >
            <a
              class="makeStyles-link-22"
              href="/"
            >
              <div
                class="makeStyles-logo-24"
              >
                <img
                  alt="baseline-xl c3pm logo"
                  height="auto"
                  src="/assets/c3pm.png"
                  width="600"
                />
                <p
                  class="MuiTypography-root makeStyles-baseline-23 makeStyles-baseline-25 MuiTypography-body1"
                >
                  C++ Package Manager
                </p>
              </div>
            </a>
          </div>
          <div
            class="PrivateHiddenCss-lgUp-17"
          >
            <a
              class="makeStyles-link-22"
              href="/"
            >
              <div
                class="makeStyles-logo-24"
              >
                <img
                  alt="baseline-lg c3pm logo"
                  height="auto"
                  src="/assets/c3pm.png"
                  width="300"
                />
                <p
                  class="MuiTypography-root makeStyles-baseline-23 makeStyles-baseline-26 MuiTypography-body1"
                >
                  C++ Package Manager
                </p>
              </div>
            </a>
          </div>
          <div
            class="makeStyles-minSpacingFantom-6"
          />
          <p
            class="MuiTypography-root makeStyles-styleBaseline-3 makeStyles-defaultStyleText-5 MuiTypography-body1"
          >
            Your toolkit to dive into C++ easily
          </p>
          <div
            class="makeStyles-minSpacingFantom-6"
          />
          <div
            class="makeStyles-containerButton-27"
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
                  class="MuiTypography-root makeStyles-getStartedButton-28 makeStyles-defaultStyleText-31 makeStyles-defaultStyleButton-32 MuiTypography-body1"
                >
                  Get started
                </p>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
            <div
              class="makeStyles-minSpacingFantom-33"
            />
            <a>
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-overRideColorLearnMoreButton-30 MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  <p
                    class="MuiTypography-root makeStyles-leanMoreButton-29 makeStyles-defaultStyleText-31 makeStyles-defaultStyleButton-32 MuiTypography-body1"
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
          class="MuiTypography-root makeStyles-styleDefinitionC3PM-4 makeStyles-defaultStyleText-5 MuiTypography-body1"
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
            class="MuiTypography-root makeStyles-title-39 MuiTypography-body1"
          >
            Why c3pm ?
          </p>
          <div
            class="makeStyles-container-34"
          >
            <img
              alt="demogif"
              class="makeStyles-demoGif-35"
              src="/assets/demo.gif"
            />
            <div
              class="makeStyles-infoCard-36"
            >
              <div
                class="makeStyles-container-40"
              >
                <p
                  class="MuiTypography-root makeStyles-titleStyle-42 MuiTypography-body1"
                >
                  C++ made easy
                </p>
                <p
                  class="MuiTypography-root makeStyles-descriptionStyle-43 MuiTypography-body1"
                >
                  With c3pm, start your cross-platform project with 0 configuration. It has never been so simple!
                </p>
                <button
                  class="makeStyles-buttonLink-44"
                  type="button"
                >
                  <p
                    class="MuiTypography-root makeStyles-textLinkStyle-41 MuiTypography-body1"
                  >
                    Learn c3pm
                  </p>
                </button>
              </div>
              <div
                class="makeStyles-container-40"
              >
                <p
                  class="MuiTypography-root makeStyles-titleStyle-42 MuiTypography-body1"
                >
                  Trivial Dependency management
                </p>
                <p
                  class="MuiTypography-root makeStyles-descriptionStyle-43 MuiTypography-body1"
                >
                  c3pm will manage the dependencies for you! No more hours spent installing a simple library: one command and you’re good to go!
                </p>
                <button
                  class="makeStyles-buttonLink-44"
                  type="button"
                >
                  <p
                    class="MuiTypography-root makeStyles-textLinkStyle-41 MuiTypography-body1"
                  >
                    View full documentation
                  </p>
                </button>
              </div>
              <div
                class="makeStyles-container-40"
              >
                <p
                  class="MuiTypography-root makeStyles-titleStyle-42 MuiTypography-body1"
                >
                  Package sharing
                </p>
                <p
                  class="MuiTypography-root makeStyles-descriptionStyle-43 MuiTypography-body1"
                >
                  c3pm is, before all, a package manager. You can share a reusable piece of code with the entire community!
                </p>
                <button
                  class="makeStyles-buttonLink-44"
                  type="button"
                >
                  <p
                    class="MuiTypography-root makeStyles-textLinkStyle-41 MuiTypography-body1"
                  >
                    Browse packages
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div
            class="makeStyles-button-37"
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
                  class="MuiTypography-root makeStyles-startLearningButton-38 MuiTypography-body1"
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
        class="makeStyles-container-45"
      >
        <div
          class="makeStyles-containerLines-52"
        >
          <p
            class="MuiTypography-root makeStyles-styleQuestion-47 makeStyles-defaultStyleText-46 MuiTypography-body1"
          >
            Install c3pm today.
          </p>
          <p
            class="MuiTypography-root makeStyles-subBaseline-50 makeStyles-defaultStyleText-46 MuiTypography-body1"
          >
            It’s free and open source.
          </p>
          <div
            class="makeStyles-minSpacingFantom-48"
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
                class="MuiTypography-root makeStyles-getStartedButton-49 makeStyles-defaultStyleText-46 MuiTypography-body1"
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
  `);
});
