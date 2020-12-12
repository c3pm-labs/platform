import semverCompare from 'semver/functions/compare';

import { Version } from '../types';

export function sortVersion(versions: Version[]): Version[] {
  return versions.slice().sort((a, b) => semverCompare(b.version, a.version));
}

export function getLastVersion(versions: Version[]): Version {
  if (versions.length === 0) {
    return null;
  }
  return sortVersion(versions)[0];
}
