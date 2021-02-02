import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render } from '@testing-library/react';
import Profile from 'pages/user/[params]';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('User', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '',
    pathname: '',
    query: { pathname: '', params: 'math' },
    asPath: '',
  }));

  const props = { _documentProps: '' };

  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Profile {...props} />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();
});
