import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render } from '@testing-library/react';

import Team from '../team';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('Team', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Team />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
