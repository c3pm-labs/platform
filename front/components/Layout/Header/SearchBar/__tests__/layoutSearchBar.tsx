import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import SearchBar from '../index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require("next/router"), "useRouter");

test('Layout', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '',
    pathname: '',
    query: { q: 'math' },
    asPath: '',
  }));

  const { container, getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SearchBar />
    </MockedProvider>,
  );

  const input = screen.getByTestId('SearchBarInput');

  // userEvent.type(input, 'math');
  // expect(input).toHaveValue('math');
  fireEvent.submit(input);
  expect(container).toMatchSnapshot();
});
