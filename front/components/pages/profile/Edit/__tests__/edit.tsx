import { render } from '@testing-library/react';
import { User } from 'types';

import Edit from '../index';

test('Edit', () => {
  const user = {
    id: '1234',
    username: 'toto',
    email: 'toto@gmail.com',
    description: 'make jokes',
    packages: {
      name: '',
      latest: {
        version: '0.2',
        publishedAt: '10:04:1999',
        description: 'hot fix',
        readme: 'blablabla',
      },
      versions: [
        {
          version: '0.2',
          publishedAt: '10:04:1999',
          description: 'hot fix',
          readme: 'blablabla',
        },
        {
          version: '0.2',
          publishedAt: '10:04:1999',
          description: 'hot fix',
          readme: 'blablabla',
        },
      ],
      author: {
        id: '12345',
        username: 'Bob',
        email: 'bob.dylan@gmail.com',
        description: 'singer',
        packages: [],
      },
    },
  };

  const { container } = render(
    <Edit
      user={(user as unknown) as User}
      // eslint-disable-next-line no-console
      setIsEdit={() => console.log('toto')}
    />,
  );

  expect(container).toMatchSnapshot();
});
