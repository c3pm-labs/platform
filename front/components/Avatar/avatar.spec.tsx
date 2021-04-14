import { render, screen } from '@testing-library/react';

import Avatar from './index';

const mockupUser = {
  id: '414',
  username: 'Toto',
  email: 'toto@gmail.com',
  description: "I'm an example",
  packages: [],
};

test('Avatar T first letter', () => {
  render(<Avatar user={mockupUser} />);

  const avatar = screen.getByTestId('user-avatar');
  expect(avatar.textContent).toEqual('T');
});

const mockupUser2 = {
  id: '414',
  username: 'Bobo',
  email: 'bobo@gmail.com',
  description: "I'm an example",
  packages: [],
};

test('Avatar B first letter', () => {
  render(<Avatar user={mockupUser2} />);

  const avatar = screen.getByTestId('user-avatar');
  expect(avatar.textContent).toEqual('B');
});

const mockupUserNoUser = null;

test('Avatar no user, svg for no user', () => {
  render(<Avatar user={mockupUserNoUser} />);

  const avatar = screen.getByTestId('user-avatar');
  expect(avatar).toContainHTML('svg');
});
