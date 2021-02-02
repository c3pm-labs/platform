import { render } from '@testing-library/react';

import Options from '../../utils';
import Onglet from '../index';

test('Onglet', () => {
  const { container } = render(
    <Onglet
      currentFocus={'Profile' as Options}
      title={'Profile' as Options}
      // eslint-disable-next-line no-console
      setIsMenu={(value) => console.log('set this menu', value)}
      // eslint-disable-next-line no-console
      onClick={(value) => console.log('click', value)}
    />,
  );

  expect(container).toMatchSnapshot();
});
