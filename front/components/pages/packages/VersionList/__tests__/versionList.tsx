import { render } from '@testing-library/react';

import VersionList from '../index';

test('VersionList', () => {
  const mockVersions = [
    {
      version: '0.1.5',
      publishedAt: '10:04:1999',
      description: 'hot fix',
      readme: 'blablabla',
    },
    {
      version: '0.2.5',
      publishedAt: '10:04:1999',
      description: 'hot fix',
      readme: 'blablabla',
    },
  ];

  const { container } = render(
    <VersionList versions={mockVersions} packageName="math" />,
  );

  expect(container).toMatchSnapshot();
});
