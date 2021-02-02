import { render } from '@testing-library/react';

import MenuItemLink from '../index';

test('Layout MenuItemLink', () => {
  const { container } = render(
    <MenuItemLink
      className=""
      // eslint-disable-next-line no-console
      onClick={() => console.log('close')}
      href="/user/[params]"
      as="/user/10"
    >
      toto
    </MenuItemLink>,
  );

  expect(container).toMatchSnapshot();
});
