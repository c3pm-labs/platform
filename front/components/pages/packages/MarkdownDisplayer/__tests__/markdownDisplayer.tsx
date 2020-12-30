/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import MarkdownDisplayer from '../index';

test('MarkdownDisplayer', () => {
  const { container } = render(<MarkdownDisplayer source="The source" />);

  expect(container).toMatchInlineSnapshot(
    `
    <div>
      <div
        class="makeStyles-readme-1"
      >
        <p>
          The source
        </p>
      </div>
    </div>
  `,
  );
});
