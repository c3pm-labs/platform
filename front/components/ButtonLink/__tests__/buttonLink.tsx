import { render } from '@testing-library/react';

import ButtonLink from '../index';

test('ButtonLink', () => {
  const { container } = render(
    <ButtonLink href="https://c3pm.io/">Toto</ButtonLink>,
  );

  expect(container).toMatchSnapshot();
});
