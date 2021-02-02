import { render } from '@testing-library/react';

import Footer from '../index';

test('Layout Footer', () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
