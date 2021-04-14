import { render, screen } from '@testing-library/react';

import Logo from './index';

test('Logo baseline xl', () => {
  render(<Logo type="baseline" size="xl" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'baseline-xl c3pm logo');
});

test('Logo baseline md', () => {
  render(<Logo type="baseline" size="md" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'baseline-md c3pm logo');
});

test('Logo baseline lg', () => {
  render(<Logo type="baseline" size="lg" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'baseline-lg c3pm logo');
});

test('Logo baseline sm', () => {
  render(<Logo type="baseline" size="sm" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'baseline-sm c3pm logo');
});

test('Logo no size no type', () => {
  render(<Logo />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'classic-null c3pm logo');
});

test('Logo mini xl', () => {
  render(<Logo type="mini" size="xl" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'mini-xl c3pm logo');
});

test('Logo mini md', () => {
  render(<Logo type="mini" size="md" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'mini-md c3pm logo');
});

test('Logo mini lg', () => {
  render(<Logo type="mini" size="lg" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'mini-lg c3pm logo');
});

test('Logo mini sm', () => {
  render(<Logo type="mini" size="sm" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'mini-sm c3pm logo');
});

test('Logo mini no size', () => {
  render(<Logo type="mini" />);

  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('alt', 'mini-null c3pm logo');
});
