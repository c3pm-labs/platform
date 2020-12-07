/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import Head from '../index';

test('Head', () => {
  const { container } = render(<Head title="C3PM" />);

  expect(container).toMatchInlineSnapshot('<div />');
});
