import SearchBar from "../index";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import React from "react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("Layout", () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SearchBar />
    </MockedProvider>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <form
        action="#"
      >
        <div
          class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
        >
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <input
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputTypeSearch MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              name="search"
              placeholder="search..."
              type="search"
              value=""
            />
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
              style="padding-left: 8px;"
            >
              <legend
                class="PrivateNotchedOutline-legend-3"
                style="width: 0.01px;"
              >
                <span>
                  ​
                </span>
              </legend>
            </fieldset>
          </div>
          
        </div>
      </form>
    </div>
  `);
});
