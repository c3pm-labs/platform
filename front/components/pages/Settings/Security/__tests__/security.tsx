import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import Security from '../index';

// eslint-disable-next-line
const useViewer = jest.spyOn(require('hooks/auth'), 'useViewer');

test('Security', () => {
  const mocks = [];

  useViewer.mockImplementation(() => ({
    username: 'toto',
    email: 'tata',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Security />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
