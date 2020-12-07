/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";

import ButtonLink from "../index";

test("ButtonLink", () => {
  const { container } = render(
    <ButtonLink href="https://c3pm.io/">Toto</ButtonLink>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        aria-disabled="false"
        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-default-1 makeStyles-primary-2 makeStyles-primary-6 MuiButton-disableElevation"
        href="https://c3pm.io/"
        tabindex="0"
      >
        <span
          class="MuiButton-label"
        >
          Toto
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </a>
    </div>
  `);
});
