import { sortVersion, getLastVersion } from 'utils/version';

test('SortVersion', () => {
  const initialVersions = [
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

  expect(sortVersion(initialVersions)).toEqual(
    [
      {
        version: '0.2.5',
        publishedAt: '10:04:1999',
        description: 'hot fix',
        readme: 'blablabla',
      },
      {
        version: '0.1.5',
        publishedAt: '10:04:1999',
        description: 'hot fix',
        readme: 'blablabla',
      },
    ],
  );
});

test('GetLastVersion', () => {
  const initialVersions = [
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

  expect(getLastVersion(initialVersions)).toEqual(
    {
      version: '0.2.5',
      publishedAt: '10:04:1999',
      description: 'hot fix',
      readme: 'blablabla',
    },
  );
});

test('GetLastVersion with versions empty', () => {
  const initialVersions = [];

  expect(getLastVersion(initialVersions)).toEqual(null);
});
