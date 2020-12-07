/* eslint-disable import/no-extraneous-dependencies */
import react from "react";
import { render } from "@testing-library/react";

import Button from "../index";

test("Button", () => {
  const { container, debug } = render(<Button>Hello</Button>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-default-1 makeStyles-primary-2 makeStyles-primary-6 MuiButton-disableElevation"
        tabindex="0"
        type="button"
      >
        <span
          class="MuiButton-label"
        >
          Hello
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `);

  // debug();
});

test("Button contained", () => {
  const { container } = render(<Button variant="contained">Hello</Button>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-10 makeStyles-primary-11 makeStyles-primary-15 MuiButton-disableElevation"
        tabindex="0"
        type="button"
      >
        <span
          class="MuiButton-label"
        >
          Hello
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `);
});

test("Button outlined", () => {
  const { container } = render(<Button variant="outlined">Hello</Button>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="MuiButtonBase-root MuiButton-root MuiButton-outlined makeStyles-default-19 makeStyles-primary-20 makeStyles-primary-24 MuiButton-disableElevation"
        tabindex="0"
        type="button"
      >
        <span
          class="MuiButton-label"
        >
          Hello
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `);
});
