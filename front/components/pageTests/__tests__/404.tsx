import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render } from '@testing-library/react';
import FourZeroFour from 'pages/404';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('404', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <FourZeroFour />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
