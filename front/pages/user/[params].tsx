import React from 'react';
import {
  makeStyles, Typography, Box,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { Status, useUser } from 'hooks/user';
import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from 'utils/withApollo';
import Head from 'components/Head';
import Layout from 'components/Layout';

import PageNotFound from '../404';
import Avatar from '../../components/Avatar';
import ProfileInfos from '../../components/pages/profile/ProfileInfos';
import PackageCard from '../../components/PackageCard';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      flexDirection: 'row',
      minHeight: '80vh',
    },
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    [theme.breakpoints.between('md', 'xl')]: {
      height: '100%',
      maxWidth: 400,
      width: '40%',
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
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
    fontSize: 24,
    width: '100%',
  },
  packageContainer: {
    width: '100%',
    display: 'flex',
    flexGrow: 0.5,
    flexDirection: 'column',
    marginTop: 40,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      alignSelf: 'center',
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      width: '50%',
    },
  },
  packages: {
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  noPackage: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

function Profile(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const user = useUser({ id: String(router.query.params) });

  if (user === Status.LOADING) {
    return (<></>);
  }

  if (user === Status.NO_USER) {
    return (<PageNotFound />);
  }

  return (
    <>
      <Layout>
        <Head title="c3pm - profile" />
        <Box className={classes.box} p={1} m={1}>
          <div className={classes.profileContainer}>
            <Box display="flex" alignItems="center" flexDirection="column" p={0} m={0}>
              <Avatar
                user={user}
                withName={false}
                classes={{ picture: classes.picture }}
              />
              <ProfileInfos user={user} />
            </Box>
          </div>
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
                You don&apos;t have any package yet.
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
