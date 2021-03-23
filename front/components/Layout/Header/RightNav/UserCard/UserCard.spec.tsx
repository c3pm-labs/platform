import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  const button = screen.getByRole('button', {
    name: /t/i,
  });
  expect(button).not.toHaveAttribute('aria-controls', 'menu-list-grow');
});

test('UserCard expandMore', () => {
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

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  userEvent.click(screen.getByTestId('user-menu'));
  const button = screen.getByRole('button', {
    name: /t/i,
  });
  expect(button).toHaveAttribute('aria-controls', 'menu-list-grow');
});
