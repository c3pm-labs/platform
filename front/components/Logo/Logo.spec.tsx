import { render } from '@testing-library/react';

import Logo from './index';

test('Logo baseline xl', () => {
  const { getByTestId } = render(<Logo type="baseline" size="xl" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'baseline-xl c3pm logo');
});

test('Logo baseline md', () => {
  const { getByTestId } = render(<Logo type="baseline" size="md" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'baseline-md c3pm logo');
});

test('Logo baseline lg', () => {
  const { getByTestId } = render(<Logo type="baseline" size="lg" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'baseline-lg c3pm logo');
});

test('Logo baseline sm', () => {
  const { getByTestId } = render(<Logo type="baseline" size="sm" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'baseline-sm c3pm logo');
});

test('Logo no size no type', () => {
  const { getByTestId } = render(<Logo />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'classic-null c3pm logo');
});

test('Logo mini xl', () => {
  const { getByTestId } = render(<Logo type="mini" size="xl" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'mini-xl c3pm logo');
});

test('Logo mini md', () => {
  const { getByTestId } = render(<Logo type="mini" size="md" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'mini-md c3pm logo');
});

test('Logo mini lg', () => {
  const { getByTestId } = render(<Logo type="mini" size="lg" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'mini-lg c3pm logo');
});

test('Logo mini sm', () => {
  const { getByTestId } = render(<Logo type="mini" size="sm" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'mini-sm c3pm logo');
});

test('Logo mini no size', () => {
  const { getByTestId } = render(<Logo type="mini" />);

  const logo = getByTestId('logo');
  expect(logo).toHaveAttribute('alt', 'mini-null c3pm logo');
});
