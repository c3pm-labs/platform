import Home from "../index";
import { MockedProvider } from "@apollo/client/testing";
import TestRenderer from "react-test-renderer";
import React from "react";

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

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  const tree = component.toJSON();

  expect(tree.children).toMatchInlineSnapshot(`
    Array [
      <div
        className="makeStyles-container-8"
      >
        <div
          className="MuiAvatar-root MuiAvatar-circle makeStyles-picture-9 makeStyles-picture-11 makeStyles-avatar-6 MuiAvatar-colorDefault"
        >
          T
        </div>
      </div>,
      <svg
        aria-hidden={true}
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        />
      </svg>,
    ]
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

  useViewer.mockImplementation(() => (null));

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  const tree = component.toJSON();

    if (!tree) return;

  expect(tree.children).toMatchInlineSnapshot(`
    Array [
      <div
        className="makeStyles-container-8"
      >
        <div
          className="MuiAvatar-root MuiAvatar-circle makeStyles-picture-9 makeStyles-picture-12 makeStyles-avatar-6 MuiAvatar-colorDefault"
        >
          <svg
            aria-hidden={true}
            className="MuiSvgIcon-root MuiAvatar-fallback"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </div>
      </div>,
      <svg
        aria-hidden={true}
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        />
      </svg>,
    ]
  `);
});
