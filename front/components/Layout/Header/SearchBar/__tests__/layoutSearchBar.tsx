import SearchBar from "../index";
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

test("Layout", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SearchBar />
    </MockedProvider>
  );

  const tree = component.toJSON();

  expect(tree.children).toMatchInlineSnapshot(`
    Array [
      <div
        className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
      >
        <div
          className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          onClick={[Function]}
        >
          <input
            aria-invalid={false}
            autoFocus={false}
            className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputTypeSearch MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
            disabled={false}
            name="search"
            onAnimationStart={[Function]}
            onBlur={[Function]}
            onChange={[Function]}
            onFocus={[Function]}
            placeholder="search..."
            required={false}
            type="search"
            value=""
          />
          <fieldset
            aria-hidden={true}
            className="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
            style={
              Object {
                "paddingLeft": 8,
              }
            }
          >
            <legend
              className="PrivateNotchedOutline-legend-3"
              style={
                Object {
                  "width": 0.01,
                }
              }
            >
              <span
                dangerouslySetInnerHTML={
                  Object {
                    "__html": "&#8203;",
                  }
                }
              />
            </legend>
          </fieldset>
        </div>
        
      </div>,
    ]
  `);
});
