import { render, screen } from '@testing-library/react';
import faker from 'faker';

import Avatar from './index';

const username = faker.internet.userName();
const mockupUser = {
  id: faker.datatype.uuid(),
  username,
  email: faker.internet.email(),
  description: faker.lorem.text(),
  packages: [],
};

test('Avatar T first letter', () => {
  render(<Avatar user={mockupUser} />);

  const avatar = screen.getByText(username[0]);
  expect(avatar).toHaveTextContent(username[0]);
});

const mockupUserNoUser = null;

test('Avatar no user, svg for no user', () => {
  render(<Avatar user={mockupUserNoUser} />);

  const avatar = screen.getByTestId('user-avatar');
  expect(avatar).toContainHTML('svg');
});
