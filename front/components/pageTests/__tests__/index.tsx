import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render } from '@testing-library/react';
import UserCard from 'pages/index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('User Card', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserCard />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
