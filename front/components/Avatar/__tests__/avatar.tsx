/* eslint-disable import/no-extraneous-dependencies */
import react from "react";
import { render } from "@testing-library/react";

import Avatar from "../index";

const mockupUser = {
  id: "414",
  username: "Toto",
  email: "toto@gmail.com",
  description: "I'm an example",
  packages: [],
};

test("Avatar", () => {
  const { container } = render(<Avatar user={mockupUser} />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-1"
      >
        <div
          class="MuiAvatar-root MuiAvatar-circle makeStyles-picture-2 makeStyles-picture-4 MuiAvatar-colorDefault"
          data-testid="user-avatar"
        >
          T
        </div>
        <p
          class="MuiTypography-root makeStyles-name-3 MuiTypography-body1"
        >
          Toto
        </p>
      </div>
    </div>
  `);
});

const mockupUserNoUser = null;

test("Avatar no user", () => {
  const { container } = render(<Avatar user={mockupUserNoUser} />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-5"
      >
        <div
          class="MuiAvatar-root MuiAvatar-circle makeStyles-picture-6 makeStyles-picture-8 MuiAvatar-colorDefault"
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
          class="MuiTypography-root makeStyles-name-7 MuiTypography-body1"
        />
      </div>
    </div>
  `);
});
