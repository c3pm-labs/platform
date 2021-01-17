import ProfileInfos from "../index";
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

test("ProfileInfos", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: { pathname: "", params: "math" },
    asPath: "",
  }));

  const props = { _documentProps: "" } as any;

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProfileInfos {...props} />
    </MockedProvider>
  );

  const tree = component.toJSON();

  expect(tree.children).toMatchInlineSnapshot(`undefined`);
});
