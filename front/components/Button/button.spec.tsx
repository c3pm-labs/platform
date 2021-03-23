import { render } from '@testing-library/react';

import Button from './index';

test('Button', () => {
  const { getByTestId } = render(<Button>Hello</Button>);

  const button = getByTestId('button');
  expect(button).toHaveClass('MuiButton-text');
});

test('Button contained', () => {
  const { getByTestId } = render(<Button variant="contained">Hello</Button>);

  const button = getByTestId('button');
  expect(button).toHaveClass('MuiButton-contained');
});

test('Button outlined', () => {
  const { getByTestId } = render(<Button variant="outlined">Hello</Button>);

  const button = getByTestId('button');
  expect(button).toHaveClass('MuiButton-outlined');
});
