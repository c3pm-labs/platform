import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import React from 'react';
import Register from 'pages/register';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('User Card', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '',
    pathname: '',
    query: '',
    asPath: '',
  }));

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Register />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
