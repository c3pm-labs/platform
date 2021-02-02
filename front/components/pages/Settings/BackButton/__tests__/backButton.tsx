import { render } from '@testing-library/react';

import BackButton from '../index';

test('Back Button', () => {
  const { container } = render(
    <BackButton
      title="titre"
      // eslint-disable-next-line no-console
      goBack={() => console.log('go back')}
    />,
  );

  expect(container).toMatchSnapshot();
});
