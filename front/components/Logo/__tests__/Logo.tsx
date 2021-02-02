import { render } from '@testing-library/react';

import Logo from '../index';

test('Logo baseline xl', () => {
  const { container } = render(<Logo type="baseline" size="xl" />);

  expect(container).toMatchSnapshot();
});

test('Logo baseline md', () => {
  const { container } = render(<Logo type="baseline" size="md" />);

  expect(container).toMatchSnapshot();
});

test('Logo baseline lg', () => {
  const { container } = render(<Logo type="baseline" size="lg" />);

  expect(container).toMatchSnapshot();
});

test('Logo baseline sm', () => {
  const { container } = render(<Logo type="baseline" size="sm" />);

  expect(container).toMatchSnapshot();
});

test('Logo no size no type', () => {
  const { container } = render(<Logo />);

  expect(container).toMatchSnapshot();
});

test('Logo mini xl', () => {
  const { container } = render(<Logo type="mini" size="xl" />);

  expect(container).toMatchSnapshot();
});

test('Logo mini md', () => {
  const { container } = render(<Logo type="mini" size="md" />);

  expect(container).toMatchSnapshot();
});

test('Logo mini lg', () => {
  const { container } = render(<Logo type="mini" size="lg" />);

  expect(container).toMatchSnapshot();
});

test('Logo mini sm', () => {
  const { container } = render(<Logo type="mini" size="sm" />);

  expect(container).toMatchSnapshot();
});

test('Logo mini no size', () => {
  const { container } = render(<Logo type="mini" />);

  expect(container).toMatchSnapshot();
});
