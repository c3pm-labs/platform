import { render, screen } from '@testing-library/react';

import Button from './index';

test('Button', () => {
  render(<Button>Hello</Button>);

  const button = screen.getByRole('button');
  expect(button).toHaveClass('MuiButton-text');
});

test('Button contained', () => {
  render(<Button variant="contained">Hello</Button>);

  const button = screen.getByRole('button');
  expect(button).toHaveClass('MuiButton-contained');
});

test('Button outlined', () => {
  render(<Button variant="outlined">Hello</Button>);

  const button = screen.getByRole('button');
  expect(button).toHaveClass('MuiButton-outlined');
});
