import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'utils/test/customRender';
import { fakeViewer } from 'utils/test/builder';

import Home from './index';

async function quickSleep() {
  await new Promise((resolve) => {
    setTimeout(() => { resolve(true); }, 900);
  });
}

test('UserCard expandLess', async () => {
  render(
    <Home />,
  );

  await waitFor(quickSleep);

  const button = screen.getByRole('button', {
    name: fakeViewer.username[0],
  });

  expect(button).not.toHaveAttribute('aria-controls', 'menu-list-grow');
  userEvent.click(screen.getByTestId('user-menu'));
  expect(button).toHaveAttribute('aria-controls', 'menu-list-grow');
});
