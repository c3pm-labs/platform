import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render } from '@testing-library/react';
import PackageDetails from 'pages/package/[...params]';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
// eslint-disable-next-line
const useQuery = jest.spyOn(require('@apollo/client'), 'useQuery');

test('PackageDetails', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '/',
    query: { pathname: '', params: 'math' },
    asPath: '',
  }));

  useQuery.mockImplementation(() => ({
    data: {
      version: {
        package: {
          name: 'simple-math',
          latest: { publishedAt: '' },
          author: { id: '' },
        },
      },
      publishedAt: '',
      description: '',
      readme: '',
    },
    loading: false,
  }));

  const props = {};

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PackageDetails {...props} />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
