import React, { useState } from 'react';
import {
  makeStyles, Typography, Box,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Status, useUser } from 'hooks/user';
import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from 'utils/withApollo';
import Head from 'components/Head';
import Layout from 'components/Layout';

import Avatar from '../../components/Avatar';
import Edit from '../../components/pages/profile/Edit';
import ProfileInfos from '../../components/pages/profile/ProfileInfos';
import PackageCard from '../../components/PackageCard';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      flexDirection: 'row',
      height: '80vh',
    },
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.between('md', 'xl')]: {
      height: '100%',
      maxWidth: 240,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  picture: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginRight: 0,
    fontSize: '2.5em',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
  },
  line: {
    [theme.breakpoints.up('md')]: {
      width: '1px',
      height: '60vh',
      marginTop: 50,
      marginLeft: '50px',
      marginRight: '50px',
      backgroundColor: theme.palette.grey[400],
    },
  },
  packageContainer: {
    width: '100%',
    display: 'flex',
    flexGrow: 0.5,
    flexDirection: 'column',
    marginTop: 40,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  packages: {
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  select: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(16),
  },
  edit: {
    display: 'flex',
    fontSize: 24,
  },
  save: {
    display: 'flex',
    minWidth: 100,
  },
  cancel: {
    display: 'flex',
    minWidth: 100,
    marginLeft: theme.spacing(1),
  },
  noPackage: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

function Profile(): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const classes = useStyles();
  const router = useRouter();
  const user = useUser({ id: String(router.query.params) });

  if (Status.LOADING) return (<></>);
  if (Status.NO_USER) return (<ErrorPage statusCode={404} />);

  return (
    <>
      <Layout>
        <Head title="c3pm - profile" />
        <Box className={classes.box} p={1} m={1}>
          <div className={classes.line} />
          <div className={classes.profileContainer}>
            <Box display="flex" alignItems="center" flexDirection="column" p={0} m={0}>
              <Avatar
                user={user}
                withName={false}
                classes={{ picture: classes.picture }}
              />
              {isEdit
                ? <Edit setIsEdit={setIsEdit} user={user} />
                : <ProfileInfos setIsEdit={setIsEdit} user={user} />}
            </Box>
          </div>
          <div className={classes.line} />
          <div className={classes.packageContainer}>
            <Box display="flex" justifyContent="center" flexDirection="row">
              <Typography
                variant="subtitle1"
                className={classes.title}
              >
                Packages
              </Typography>
            </Box>
            {user.packages.length === 0 ? (
              <Typography
                variant="body1"
                className={classes.noPackage}
              >
                You don&apos;t have any packages yet.
              </Typography>
            ) : (
              <Box display="flex" justifyContent="center" flexDirection="column">
                <Box>
                  {user && user.packages && user.packages.map((data) => (
                    <div key={data.name}>
                      <div className={classes.packages} />
                      <PackageCard packageData={data} key={data.name} />
                    </div>
                  ))}
                </Box>
              </Box>
            )}
          </div>
        </Box>
      </Layout>
    </>
  );
}

export default withApollo(Profile, { getDataFromTree });
