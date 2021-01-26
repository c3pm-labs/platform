/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";

import Logo from "../index";

test("Logo baseline xl", () => {
  const { container } = render(<Logo type="baseline" size="xl" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-1"
        href="/"
      >
        <div
          class="makeStyles-logo-3"
        >
          <img
            alt="baseline-xl c3pm logo"
            height="auto"
            src="/assets/c3pm.png"
            width="600"
          />
          <p
            class="MuiTypography-root makeStyles-baseline-2 makeStyles-baseline-4 MuiTypography-body1"
          >
            C++ Package Manager
          </p>
        </div>
      </a>
    </div>
  `);
});

test("Logo baseline md", () => {
  const { container } = render(<Logo type="baseline" size="md" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-5"
        href="/"
      >
        <div
          class="makeStyles-logo-7"
        >
          <img
            alt="baseline-md c3pm logo"
            height="auto"
            src="/assets/c3pm.png"
            width="200"
          />
          <p
            class="MuiTypography-root makeStyles-baseline-6 makeStyles-baseline-8 MuiTypography-body1"
          >
            C++ Package Manager
          </p>
        </div>
      </a>
    </div>
  `);
});

test("Logo baseline lg", () => {
  const { container } = render(<Logo type="baseline" size="lg" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-9"
        href="/"
      >
        <div
          class="makeStyles-logo-11"
        >
          <img
            alt="baseline-lg c3pm logo"
            height="auto"
            src="/assets/c3pm.png"
            width="300"
          />
          <p
            class="MuiTypography-root makeStyles-baseline-10 makeStyles-baseline-12 MuiTypography-body1"
          >
            C++ Package Manager
          </p>
        </div>
      </a>
    </div>
  `);
});

test("Logo baseline sm", () => {
  const { container } = render(<Logo type="baseline" size="sm" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-13"
        href="/"
      >
        <div
          class="makeStyles-logo-15"
        >
          <img
            alt="baseline-sm c3pm logo"
            height="auto"
            src="/assets/c3pm.png"
            width="100"
          />
          <p
            class="MuiTypography-root makeStyles-baseline-14 makeStyles-baseline-16 MuiTypography-body1"
          >
            C++ Package Manager
          </p>
        </div>
      </a>
    </div>
  `);
});

test("Logo no size no type", () => {
  const { container } = render(<Logo />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-17"
        href="/"
      >
        <div
          class="makeStyles-logo-19"
        >
          <img
            alt="classic-null c3pm logo"
            height="auto"
            src="/assets/c3pm.png"
            width="100%"
          />
        </div>
      </a>
    </div>
  `);
});

test("Logo mini xl", () => {
  const { container } = render(<Logo type="mini" size="xl" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-21"
        href="/"
      >
        <div
          class="makeStyles-logo-23"
        >
          <img
            alt="mini-xl c3pm logo"
            height="200"
            src="/assets/c3pm_3.png"
            width="auto"
          />
        </div>
      </a>
    </div>
  `);
});

test("Logo mini md", () => {
  const { container } = render(<Logo type="mini" size="md" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-25"
        href="/"
      >
        <div
          class="makeStyles-logo-27"
        >
          <img
            alt="mini-md c3pm logo"
            height="80"
            src="/assets/c3pm_3.png"
            width="auto"
          />
        </div>
      </a>
    </div>
  `);
});

test("Logo mini lg", () => {
  const { container } = render(<Logo type="mini" size="lg" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-29"
        href="/"
      >
        <div
          class="makeStyles-logo-31"
        >
          <img
            alt="mini-lg c3pm logo"
            height="100"
            src="/assets/c3pm_3.png"
            width="auto"
          />
        </div>
      </a>
    </div>
  `);
});

test("Logo mini sm", () => {
  const { container } = render(<Logo type="mini" size="sm" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-33"
        href="/"
      >
        <div
          class="makeStyles-logo-35"
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
  `);
});

test("Logo mini no size", () => {
  const { container } = render(<Logo type="mini" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="makeStyles-link-37"
        href="/"
      >
        <div
          class="makeStyles-logo-39"
        >
          <img
            alt="mini-null c3pm logo"
            height="auto"
            src="/assets/c3pm_3.png"
            width="auto"
          />
        </div>
      </a>
    </div>
  `);
});
