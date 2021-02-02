import { render } from '@testing-library/react';

import MarkdownDisplayer from '../index';

test('MarkdownDisplayer', () => {
  const { container } = render(<MarkdownDisplayer source="The source" />);

  expect(container).toMatchSnapshot();
});
