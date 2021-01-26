/* eslint-disable import/no-extraneous-dependencies */
import react from "react";
import { render } from "@testing-library/react";
import { Package } from "types";

import PackageCard from "../index";

test("PackageCard", () => {
  const mockPackage = {
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
  };

  const { container, debug } = render(
    <PackageCard packageData={mockPackage as Package} />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-1"
        data-testid="packageCard-"
      >
        <div
          class="makeStyles-top-2"
        >
          <h5
            class="MuiTypography-root MuiTypography-h5"
            data-testid="packageCard--name"
          >
            <a
              class="MuiTypography-root MuiLink-root MuiLink-underlineAlways MuiTypography-colorPrimary"
              href="/package/"
            />
          </h5>
          <h5
            class="MuiTypography-root MuiTypography-h5 MuiTypography-colorPrimary"
            data-testid="packageCard--version"
          >
            0.2
          </h5>
        </div>
        <div
          style="display: flex; flex-wrap: wrap;"
        >
          <p
            class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary"
          >
            hot fix
          </p>
        </div>
        <p
          class="MuiTypography-root makeStyles-description-5 MuiTypography-body1 MuiTypography-colorTextPrimary"
        >
          hot fix
        </p>
        <div
          class="makeStyles-bottom-3"
        >
          <div
            class="makeStyles-container-8"
          >
            <div
              class="MuiAvatar-root MuiAvatar-circle makeStyles-picture-9 makeStyles-picture-11 makeStyles-avatar-6 MuiAvatar-colorDefault"
              data-testid="user-avatar"
            >
              B
            </div>
            <p
              class="MuiTypography-root makeStyles-name-10 makeStyles-name-7 MuiTypography-body1"
            >
              Bob
            </p>
          </div>
          <p
            class="MuiTypography-root makeStyles-update-4 MuiTypography-body2"
          >
            Last updated on the 
            Fri Jan 01 1999
          </p>
        </div>
      </div>
    </div>
  `);
});
