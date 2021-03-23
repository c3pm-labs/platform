import { render } from '@testing-library/react';

import ButtonLink from './index';

test('ButtonLink', () => {
  const { getByTestId } = render(
    <ButtonLink href="https://c3pm.io/">Toto</ButtonLink>,
  );

  const button = getByTestId('button');
  expect(button).toHaveAttribute('href', 'https://c3pm.io/');
});
