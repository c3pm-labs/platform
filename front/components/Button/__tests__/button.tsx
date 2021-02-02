import { render } from '@testing-library/react';

import Button from '../index';

test('Button', () => {
  const { container } = render(<Button>Hello</Button>);

  expect(container).toMatchSnapshot();
});

test('Button contained', () => {
  const { container } = render(<Button variant="contained">Hello</Button>);

  expect(container).toMatchSnapshot();
});

test('Button outlined', () => {
  const { container } = render(<Button variant="outlined">Hello</Button>);

  expect(container).toMatchSnapshot();
});
