import { render } from '@testing-library/react';

import Avatar from '../index';

const mockupUser = {
  id: '414',
  username: 'Toto',
  email: 'toto@gmail.com',
  description: "I'm an example",
  packages: [],
};

test('Avatar', () => {
  const { container } = render(<Avatar user={mockupUser} />);

  // eslint-disable-next-line
  expect(container).toMatchSnapshot();
});

const mockupUserNoUser = null;

test('Avatar no user', () => {
  const { container } = render(<Avatar user={mockupUserNoUser} />);

  // eslint-disable-next-line
  expect(container).toMatchSnapshot();
});
