import Search from "../search";
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

test("Search", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Search />
    </MockedProvider>
  );

  const tree = component.toJSON();

  expect(tree.children).toMatchInlineSnapshot(`undefined`);
});
