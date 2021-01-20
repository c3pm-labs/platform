import ProfileInfos from "../index";
import React from "react";
import { render } from "@testing-library/react";
import { User } from "types";

const useViewer = jest.spyOn(require("hooks/auth"), "useViewer");

test("ProfileInfos", () => {

  useViewer.mockImplementation(() => ({
    username: "toto",
    email: "toto@gmail.com",
  }));

  const { container } = render(
    <ProfileInfos
      user={
        {
          username: "toto",
          email: "toto@gmail.com",
          description: "FulltStack",
          id: "12345",
        } as User
      }
      setIsEdit={() => console.log("toto")}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <h6
        class="MuiTypography-root makeStyles-name-1 MuiTypography-subtitle1"
      >
        toto
      </h6>
      <h6
        class="MuiTypography-root makeStyles-mail-2 MuiTypography-subtitle1"
      >
        toto@gmail.com
      </h6>
      <h6
        class="MuiTypography-root makeStyles-description-3 MuiTypography-subtitle1"
      >
        FulltStack
      </h6>
      <hr
        class="MuiDivider-root makeStyles-divider-4"
      />
      <h6
        class="MuiTypography-root makeStyles-nbPackages-5 MuiTypography-subtitle1"
      >
        0
         
        package
         
        uploaded
      </h6>
      <button
        class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-default-6 makeStyles-primary-7 makeStyles-primary-11 MuiButton-disableElevation MuiButton-fullWidth"
        tabindex="0"
        type="submit"
      >
        <span
          class="MuiButton-label"
        >
          Edit
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `);
});

test("ProfileInfos no data", () => {
  useViewer.mockImplementation(() => null);

  const { container } = render(
    <ProfileInfos user={null} setIsEdit={() => console.log("toto")} />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <h6
        class="MuiTypography-root makeStyles-name-15 MuiTypography-subtitle1"
      >
        error
      </h6>
      <h6
        class="MuiTypography-root makeStyles-mail-16 MuiTypography-subtitle1"
      >
        error
      </h6>
      <h6
        class="MuiTypography-root makeStyles-description-17 MuiTypography-subtitle1"
      >
        error
      </h6>
      <hr
        class="MuiDivider-root makeStyles-divider-18"
      />
      <h6
        class="MuiTypography-root makeStyles-nbPackages-19 MuiTypography-subtitle1"
      >
        0
         
        package
         
        uploaded
      </h6>
    </div>
  `);
});
