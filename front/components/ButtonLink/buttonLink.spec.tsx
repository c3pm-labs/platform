import { render, screen } from '@testing-library/react';

import ButtonLink from './index';

test('ButtonLink', () => {
  render(
    <ButtonLink href="https://c3pm.io/">Toto</ButtonLink>,
  );

  const button = screen.getByTestId('button');
  expect(button).toHaveAttribute('href', 'https://c3pm.io/');
});
