/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";
import { User } from "types";

import Edit from "../index";

test("Edit", () => {
  const user = {
    id: "1234",
    username: "toto",
    email: "toto@gmail.com",
    description: "make jokes",
    packages: {
      name: "",
      latest: {
        version: "0.2",
        publishedAt: "10:04:1999",
        description: "hot fix",
        readme: "blablabla",
      },
      versions: [
        {
          version: "0.2",
          publishedAt: "10:04:1999",
          description: "hot fix",
          readme: "blablabla",
        },
        {
          version: "0.2",
          publishedAt: "10:04:1999",
          description: "hot fix",
          readme: "blablabla",
        },
      ],
      author: {
        id: "12345",
        username: "Bob",
        email: "bob.dylan@gmail.com",
        description: "singer",
        packages: [],
      },
    },
  };

  const { container } = render(
    <Edit
      user={(user as unknown) as User}
      setIsEdit={() => console.log("toto")}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <form
        action="#"
        class="makeStyles-form-1"
      >
        <div
          class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
        >
          <label
            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled Mui-required Mui-required"
            data-shrink="true"
            for="username"
            id="username-label"
          >
            username
            <span
              aria-hidden="true"
              class="MuiFormLabel-asterisk MuiInputLabel-asterisk"
            >
               
              *
            </span>
          </label>
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <input
              aria-describedby="username-helper-text"
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="username"
              name="username"
              placeholder="toto"
              required=""
              type="text"
              value="toto"
            />
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-6 MuiOutlinedInput-notchedOutline"
            >
              <legend
                class="PrivateNotchedOutline-legendLabelled-8 PrivateNotchedOutline-legendNotched-9"
              >
                <span>
                  username
                   *
                </span>
              </legend>
            </fieldset>
          </div>
          <p
            class="MuiFormHelperText-root makeStyles-root-5 MuiFormHelperText-contained MuiFormHelperText-filled Mui-required MuiFormHelperText-marginDense"
            id="username-helper-text"
          >
            <span>
              ​
            </span>
          </p>
        </div>
        <div
          class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
        >
          <label
            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled Mui-required Mui-required"
            data-shrink="true"
            for="email"
            id="email-label"
          >
            email
            <span
              aria-hidden="true"
              class="MuiFormLabel-asterisk MuiInputLabel-asterisk"
            >
               
              *
            </span>
          </label>
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <input
              aria-describedby="email-helper-text"
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="email"
              name="email"
              placeholder="toto@gmail.com"
              required=""
              type="email"
              value="toto@gmail.com"
            />
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-6 MuiOutlinedInput-notchedOutline"
            >
              <legend
                class="PrivateNotchedOutline-legendLabelled-8 PrivateNotchedOutline-legendNotched-9"
              >
                <span>
                  email
                   *
                </span>
              </legend>
            </fieldset>
          </div>
          <p
            class="MuiFormHelperText-root makeStyles-root-5 MuiFormHelperText-contained MuiFormHelperText-filled Mui-required MuiFormHelperText-marginDense"
            id="email-helper-text"
          >
            <span>
              ​
            </span>
          </p>
        </div>
        <div
          class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth"
        >
          <label
            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled"
            data-shrink="true"
            for="description"
            id="description-label"
          >
            description
          </label>
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline MuiInputBase-marginDense MuiOutlinedInput-marginDense"
          >
            <textarea
              aria-describedby="description-helper-text"
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="description"
              name="description"
              placeholder="make jokes"
              rows="4"
            >
              make jokes
            </textarea>
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-6 MuiOutlinedInput-notchedOutline"
            >
              <legend
                class="PrivateNotchedOutline-legendLabelled-8 PrivateNotchedOutline-legendNotched-9"
              >
                <span>
                  description
                </span>
              </legend>
            </fieldset>
          </div>
          <p
            class="MuiFormHelperText-root makeStyles-root-5 MuiFormHelperText-contained MuiFormHelperText-filled MuiFormHelperText-marginDense"
            id="description-helper-text"
          >
            <span>
              ​
            </span>
          </p>
        </div>
      </form>
      <div
        class="MuiBox-root MuiBox-root-10"
      >
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-11 makeStyles-primary-12 makeStyles-primary-16 makeStyles-save-3 MuiButton-disableElevation"
          tabindex="0"
          type="submit"
        >
          <span
            class="MuiButton-label"
          >
            Save
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-11 makeStyles-error-13 makeStyles-error-21 makeStyles-cancel-4 MuiButton-disableElevation"
          tabindex="0"
          type="submit"
        >
          <span
            class="MuiButton-label"
          >
            Cancel
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
      </div>
    </div>
  `);
});
