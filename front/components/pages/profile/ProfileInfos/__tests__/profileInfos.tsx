import React from 'react';
import { render } from '@testing-library/react';
import { User } from 'types';

import ProfileInfos from '../index';

// eslint-disable-next-line
const useViewer = jest.spyOn(require('hooks/auth'), 'useViewer');

test('ProfileInfos', () => {
  useViewer.mockImplementation(() => ({
    username: 'toto',
    email: 'toto@gmail.com',
  }));

  const { container } = render(
    <ProfileInfos
      user={
        {
          username: 'toto',
          email: 'toto@gmail.com',
          description: 'FulltStack',
          id: '12345',
        } as User
      }
      // eslint-disable-next-line no-console
      setIsEdit={() => console.log('toto')}
    />,
  );

  expect(container).toMatchSnapshot();
});

test('ProfileInfos no data', () => {
  useViewer.mockImplementation(() => null);

  const { container } = render(
    // eslint-disable-next-line no-console
    <ProfileInfos user={null} setIsEdit={() => console.log('toto')} />,
  );

  expect(container).toMatchSnapshot();
});
