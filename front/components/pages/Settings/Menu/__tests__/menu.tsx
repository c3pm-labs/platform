import { render } from '@testing-library/react';

import Menu from '../index';
import Options from '../utils';

test('Menu', () => {
  const { container } = render(
    <Menu
      currentFocus={'Profile' as Options}
      // eslint-disable-next-line no-console
      setIsMenu={(value) => console.log('set this menu', value)}
      // eslint-disable-next-line no-console
      setCurrentFocus={(value) => console.log('click', value)}
    />,
  );

  expect(container).toMatchSnapshot();
});
