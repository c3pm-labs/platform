import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { graphql } from 'msw';
import Home from './index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
// eslint-disable-next-line
const useViewer = jest.spyOn(require('hooks/auth'), 'useViewer');

test('UserCard expandLess', () => {
  const mocks = [];

  useRouter.mockImplementation(() => ({
    route: '',
    pathname: '',
    query: '',
    asPath: '',
  }));

  useViewer.mockImplementation(() => ({
    username: 'toto',
    email: 'tata',
  }));


  
  sessionStorage.setItem('is-authenticated', 'toto');

  graphql.query('useViewer', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated')
    if (!authenticatedUser) {
      // When not authenticated, respond with an error
      return res(
        ctx.errors([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]),
      )
    }
    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: authenticatedUser,
          email: 'tata',
        },
      }),
    )
  })


  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  const button = screen.getByRole('button', {
    name: /t/i,
  });
  expect(button).not.toHaveAttribute('aria-controls', 'menu-list-grow');
  userEvent.click(screen.getByTestId('user-menu'));
  expect(button).toHaveAttribute('aria-controls', 'menu-list-grow');
});
