import Home from "../index";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import React from "react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useViewer = jest.spyOn(require("hooks/auth"), "useViewer");

test("UserCard", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  useViewer.mockImplementation(() => ({
    username: "toto",
    email: "tata",
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        aria-haspopup="true"
        class="makeStyles-card-1"
        data-testid="user-menu"
        type="button"
      >
        <div
          class="makeStyles-container-8"
        >
          <div
            class="MuiAvatar-root MuiAvatar-circle makeStyles-picture-9 makeStyles-picture-11 makeStyles-avatar-6 MuiAvatar-colorDefault"
            data-testid="user-avatar"
          >
            T
          </div>
        </div>
        <svg
          aria-hidden="true"
          class="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
          />
        </svg>
      </button>
    </div>
  `);
});

test("UserCard no viewer", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  useViewer.mockImplementation(() => null);

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`<div />`);
});
