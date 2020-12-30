import { render } from "@testing-library/react";
import Footer from "../index";

test("Layout Footer", () => {
  const { container } = render(<Footer />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-container-1"
      >
        <div
          class="makeStyles-textContainer-2"
        >
          <span>
            General Information
          </span>
          <a
            class="makeStyles-text-3"
            href="https://docs.c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-3 MuiTypography-body1"
            >
              Docs
            </p>
          </a>
          <a
            class="makeStyles-text-3"
            href="https://github.com/c3pm-labs/"
          >
            <p
              class="MuiTypography-root makeStyles-text-3 MuiTypography-body1"
            >
              Github
            </p>
          </a>
          <a
            class="makeStyles-text-3"
            href="https://github.com/c3pm-labs/c3pm/releases"
          >
            <p
              class="MuiTypography-root makeStyles-text-3 MuiTypography-body1"
            >
              Releases
            </p>
          </a>
        </div>
        <div
          class="makeStyles-textContainer-2"
        >
          <span>
            Contact us
          </span>
          <a
            class="makeStyles-text-3"
            href="mailto:contact@c3pm.io"
          >
            <p
              class="MuiTypography-root makeStyles-text-3 MuiTypography-body1"
            >
              contact@c3pm.io
            </p>
          </a>
          <a
            class="makeStyles-text-3"
            href="https://github.com/c3pm-labs/c3pm/issues/new"
          >
            <p
              class="MuiTypography-root makeStyles-text-3 MuiTypography-body1"
            >
              Issues
            </p>
          </a>
          <a
            class="makeStyles-text-3"
            href="/team"
          >
            Team
          </a>
        </div>
      </div>
    </div>
  `);
});
