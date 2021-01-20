import MobileMenu from "../index";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import React from "react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("Mobile Menu", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MobileMenu />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="MuiButtonBase-root MuiIconButton-root makeStyles-iconButton-3"
        tabindex="0"
        type="button"
      >
        <span
          class="MuiIconButton-label"
        >
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root makeStyles-icon-4"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `);
});
