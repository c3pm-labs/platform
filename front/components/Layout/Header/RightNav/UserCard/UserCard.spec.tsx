import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import { VIEWER } from 'queries';

import Home from './index';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const username = faker.internet.userName();

async function quickSleep() {
  await new Promise((resolve) => {
    setTimeout(() => { resolve(true); }, 900);
  });
}

test('UserCard expandLess', async () => {
  const mocks = [
    {
      request: {
        query: VIEWER,
      },
      result: {
        data: {
          viewer: {
            id: faker.datatype.uuid(),
            username,
            email: faker.internet.email(),
            description: faker.lorem.text(),
          },
        },
      },
    },
  ];

  useRouter.mockImplementation(() => ({
    route: '',
    pathname: '',
    query: '',
    asPath: '',
  }));

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  await waitFor(quickSleep);

  const button = screen.getByRole('button', {
    name: username[0],
  });

  expect(button).not.toHaveAttribute('aria-controls', 'menu-list-grow');
  userEvent.click(screen.getByTestId('user-menu'));
  expect(button).toHaveAttribute('aria-controls', 'menu-list-grow');
});
