import { render } from '@testing-library/react';

import Home from '../index';

test('Home', () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});
