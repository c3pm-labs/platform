import React from 'react';
import userEvent from '@testing-library/user-event';

import {
  render, screen, waitFor, fakeViewer,
} from 'utils/test/customRender';

import Home from './index';

test('UserCard expandLess', async () => {
  render(
    <Home />,
  );

  const buttonRendered = await waitFor(() => {
    const button = screen.getByRole('button', {
      name: fakeViewer.username[0],
    });

    expect(button).toBeInTheDocument();
    return button;
  }, { timeout: 3000 });

  expect(buttonRendered).not.toHaveAttribute('aria-controls', 'menu-list-grow');
  userEvent.click(screen.getByTestId('user-menu'));
  expect(buttonRendered).toHaveAttribute('aria-controls', 'menu-list-grow');
  const menu = screen.getByRole('tooltip');
  expect(menu).toBeInTheDocument();
});
