import { render, screen } from '@testing-library/react';
import { Package } from 'types';

import PackageCard from './index';

test('PackageCard', () => {
  const mockPackage = {
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
  };

  render(
    <PackageCard packageData={mockPackage as Package} />,
  );

  const div = screen.getByTestId('divPackageUser');
  expect(div).toContainHTML('Fri Jan 01 1999');
});
