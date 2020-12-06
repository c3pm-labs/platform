/* eslint-disable import/no-extraneous-dependencies */
import react from 'react';
import { render } from '@testing-library/react';

import Button from '../index';

test('Button', () => {
  const { container, debug } = render(<Button>Hello</Button>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-default-1 makeStyles-primary-2 makeStyles-primary-6 MuiButton-disableElevation"
        tabindex="0"
        type="button"
      >
        <span
          class="MuiButton-label"
        >
          Hello
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `);

  debug();
});
