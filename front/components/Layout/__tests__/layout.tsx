import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import React from 'react';

import Layout from '..';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('Layout', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '',
    pathname: '',
    query: '',
    asPath: '',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Layout>Toto</Layout>
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
