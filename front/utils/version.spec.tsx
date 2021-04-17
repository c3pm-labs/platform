import { sortVersion, getLastVersion } from 'utils/version';

import { versionLast, versionOutdated } from './test/builder';

test('SortVersion', () => {
  const initialVersions = [versionOutdated, versionLast];

  expect(sortVersion(initialVersions)).toEqual([versionLast, versionOutdated]);
});

test('GetLastVersion', () => {
  const initialVersions = [versionOutdated, versionLast];

  expect(getLastVersion(initialVersions)).toEqual(versionLast);
});

test('GetLastVersion with versions empty', () => {
  const initialVersions = [];

  expect(getLastVersion(initialVersions)).toEqual(null);
});
