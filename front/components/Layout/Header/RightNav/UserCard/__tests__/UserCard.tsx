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

test("Home", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  const tree = component.toJSON();

  expect(tree.children).toMatchInlineSnapshot(`
    Array [
      <span
        className="MuiIconButton-label"
      >
        <svg
          aria-hidden={true}
          className="MuiSvgIcon-root makeStyles-icon-4"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </span>,
    ]
  `);
});
