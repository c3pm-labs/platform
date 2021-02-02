import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import SearchBar from '../index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require("next/router"), "useRouter");

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
      <SearchBar />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
