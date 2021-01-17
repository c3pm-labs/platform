import React from 'react';
import semverMajor from 'semver/functions/major';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Version } from 'types';

import { sortVersion } from 'utils/version';

export interface VersionListProps {
  versions: Version[];
  packageName: string;
}

const useStyles = makeStyles((theme) => ({
  versions: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      background: 'transparent',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(2)}px`,
      cursor: 'pointer',
      outline: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textDecorationColor: theme.palette.primary.main,
      },
    },
  },
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
  versionName: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  separator: {
    width: 1,
    margin: `0 ${theme.spacing(1)}px`,
    height: 28,
    backgroundColor: theme.palette.grey[300],
  },
  versionDate: {
    color: theme.palette.grey[600],
  },
}));

function VersionList({ versions, packageName }: VersionListProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.versions}>
      {sortVersion(versions).map((v: Version, i, array) => (
        <React.Fragment key={v.version}>
          {(i === 0 || semverMajor(v.version) !== semverMajor(array[i - 1].version))
          && (
            <h2 className={classes.title}>
              v
              {semverMajor(v.version)}
              :
            </h2>
          )}
          <Link href="/package/[...params]" as={`/package/${packageName}/${v.version}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a data-testid={`link-to-v${v.version}`}>
              <span className={classes.versionName}>{v.version}</span>
              <div className={classes.separator} />
              <span className={classes.versionDate}>{new Date(v.publishedAt).toDateString()}</span>
            </a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default VersionList;
