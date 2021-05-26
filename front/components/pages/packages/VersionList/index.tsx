import React, { useState } from 'react';
import semverMajor from 'semver/functions/major';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Version, Viewer } from 'types';
import { Modal } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import semver from 'semver';

import { sortVersion } from 'utils/version';

import { useViewer } from '../../../../hooks/auth';
import Button from '../../../Button';
import { DELETE_VERSION, LOGOUT, PACKAGE_FROM_VERSION } from '../../../../queries';

export interface VersionListProps {
  versions: Version[];
  packageName: string;
  authorId: string;
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
  delete: {
    padding: 0,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  deleteModalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    background: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    width: 400,
    left: 'calc((100vw - 400px) /2)',
    height: 200,
    top: 'calc((100vh - 200px) /2)',
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
      left: 'calc((100vw - 300px) /2)',
    },
    '& h3': {
      marginTop: 0,
      fontSize: 24,
      wordBreak: 'break-word',
    },
    '& h4': {
      wordBreak: 'break-word',
      width: '100%',
      textAlign: 'center',
      fontWeight: 'normal',
      margin: '0',
      marginBottom: theme.spacing(3),
    },
    '& div': {
      width: '100%',
      justifyContent: 'space-evenly',
    },
    '& button': {
      width: 100,
      height: 40,
    },
  },
}));

function VersionList({ versions, packageName, authorId }: VersionListProps): JSX.Element {
  const router = useRouter();
  const packageVersion = (router.query.params[1] && semver.valid(router.query.params[1])) || null;
  const classes = useStyles();
  const viewer = useViewer();
  const [versionToDelete, setVersionToDelete] = useState<Version | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteVersion] = useMutation<{ version: Version}>(DELETE_VERSION, {
    onError: (e) => {
      console.log('ERROR : ', e);
      if (e.graphQLErrors[0]?.extensions?.code === 'FORBIDDEN') {
        // eslint-disable-next-line no-console
        console.log('User not logged in');
      }
    },
    onCompleted: () => {
      if (versionToDelete.version === packageVersion) {
        router.push(`${packageName}`);
      }
      setVersionToDelete(null);
    },
  });

  return (
    <>
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
            <div className={classes.row}>
              <Link href="/package/[...params]" as={`/package/${packageName}/${v.version}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a data-testid={`link-to-v${v.version}`}>
                  <span className={classes.versionName}>{v.version}</span>
                  <div className={classes.separator} />
                  <span className={classes.versionDate}>
                    {new Date(v.publishedAt).toDateString()}
                  </span>
                </a>
              </Link>
              { viewer !== null && viewer.id === authorId ? (
                <>
                  <div className={classes.separator} />
                  <Button
                    className={classes.delete}
                    onClick={() => {
                      setVersionToDelete(v);
                      setIsModalOpen(true);
                    }}
                    type="button"
                    variant="text"
                    color="error"
                    fullWidth={false}
                  >
                    Delete
                  </Button>
                </>
              ) : null}
            </div>
          </React.Fragment>
        ))}
      </div>
      { isModalOpen && versionToDelete !== null ? (
        <Modal
          open
          onClose={() => setVersionToDelete(null)}
          aria-labelledby="delete-modal"
          aria-describedby="delete-confirmation-modal"
        >
          <div className={classes.deleteModalContainer}>
            <h3 id="modal-title">{`Delete ${packageName} - v${semverMajor(versionToDelete?.version)}`}</h3>
            <h4 id="modal-description">{`Are you sure you want to delete ${packageName} - v${semverMajor(versionToDelete?.version)}?`}</h4>
            <div className={classes.row}>
              <Button color="primary" variant="outlined" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button
                color="error"
                variant="contained"
                onClick={async () => {
                  try {
                    await deleteVersion({
                      variables: {
                        packageName, version: versionToDelete.version,
                      },
                    });
                  } catch (e) {
                    console.log('error : ', e);
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal>

      ) : null}
    </>
  );
}

export default VersionList;
