import { sortVersion, getLastVersion } from 'utils/version';

import { lastVersion, outdatedVersion } from './test/builder';

test('SortVersion', () => {
  const initialVersions = [outdatedVersion, lastVersion];

  expect(sortVersion(initialVersions)).toEqual([lastVersion, outdatedVersion]);
});

test('GetLastVersion', () => {
  const initialVersions = [outdatedVersion, lastVersion];

  expect(getLastVersion(initialVersions)).toEqual(lastVersion);
});

test('GetLastVersion with versions empty', () => {
  const initialVersions = [];

  expect(getLastVersion(initialVersions)).toEqual(null);
});
