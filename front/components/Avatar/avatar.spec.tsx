import { render } from '@testing-library/react';

import Avatar from './index';

const mockupUser = {
  id: '414',
  username: 'Toto',
  email: 'toto@gmail.com',
  description: "I'm an example",
  packages: [],
};

test('Avatar T first letter', () => {
  const { getByTestId } = render(<Avatar user={mockupUser} />);

  const avatar = getByTestId('user-avatar');
  expect(avatar).toContainHTML('>T<');
});

const mockupUser2 = {
  id: '414',
  username: 'Bobo',
  email: 'bobo@gmail.com',
  description: "I'm an example",
  packages: [],
};

test('Avatar B first letter', () => {
  const { getByTestId } = render(<Avatar user={mockupUser2} />);

  const avatar = getByTestId('user-avatar');
  expect(avatar).toContainHTML('>B<');
});

const mockupUserNoUser = null;

test('Avatar no user, svg for no user', () => {
  const { getByTestId } = render(<Avatar user={mockupUserNoUser} />);

  const avatar = getByTestId('user-avatar');
  expect(avatar).toContainHTML('svg');
});
