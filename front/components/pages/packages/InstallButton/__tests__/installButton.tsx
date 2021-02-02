import { render } from '@testing-library/react';

import InstallButton from '../index';

test('InstallButton', () => {
  const { container } = render(<InstallButton packageName="Math" />);

  expect(container).toMatchSnapshot();
});
