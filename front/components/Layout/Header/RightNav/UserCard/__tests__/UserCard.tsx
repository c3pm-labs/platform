import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import Home from '../index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
// eslint-disable-next-line
const useViewer = jest.spyOn(require('hooks/auth'), 'useViewer');

test('UserCard', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  }));

  useViewer.mockImplementation(() => ({
    username: 'toto',
    email: 'tata',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});

test('UserCard no viewer', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  }));

  useViewer.mockImplementation(() => null);

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
