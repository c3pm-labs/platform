import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import React from 'react';

import MobileMenu from '../index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('Mobile Menu', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MobileMenu />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
