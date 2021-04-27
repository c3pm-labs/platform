import { sortVersion, getLastVersion } from 'utils/version';

import { versionBuilder } from './test/builder';

export const outdatedVersion = versionBuilder('0.1.5', '10:04:1999');
export const lastVersion = versionBuilder('0.2.5', '18:07:2000');

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
