/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";

import InstallButton from "../index";

test("InstallButton", () => {
  const { container } = render(<InstallButton packageName="Math" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="makeStyles-add-1"
        title="copy"
        type="button"
      >
        $ 
        ctpm add Math
      </button>
    </div>
  `);
});
