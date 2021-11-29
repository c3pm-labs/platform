import React from 'react';
import {
  makeStyles, Typography, Box,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { Status, useUser } from 'hooks/user';
import type { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Head from 'components/Head';
import Layout from 'components/Layout';

import PageNotFound from '../404';
import Avatar from '../../components/Avatar';
import ProfileInfos from '../../components/pages/profile/ProfileInfos';
import PackageCard from '../../components/PackageCard';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.between('md', 'xl')]: {
      flexDirection: 'row',
      minHeight: '80vh',
      padding: 0,
      marginTop: 40,
    },
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 30,
    marginTop: 40,
  },
  packagesContainer: {
    paddingBottom: theme.spacing(3),
  },
  profileContainerPadding: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8),
    background: 'linear-gradient(197.6deg, rgba(38, 179, 239, 0.2) 0.93%, rgba(255, 112, 68, 0.2) 98.91%)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.12)',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.between('md', 'xl')]: {
      height: '100%',
      maxWidth: 400,
      width: '100%',
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
      paddingLeft: theme.spacing(4),
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
    },
    fontSize: '1.25em',
    fontWeight: 500,
    width: '100%',
  },
  packageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 0.5,
    flexDirection: 'column',
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 30px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 0,
      width: '50%',
      marginLeft: 40,
    },
  },
  packages: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  noPackage: {
    fontSize: 14,
    textAlign: 'left',
  },
}));

const Profile: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const user = useUser({ id: String(router.query.params) });
  const { t } = useTranslation('common');

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
        <div className={classes.container}>
          <div className={classes.profileContainerPadding}>
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
          </div>
          <div className={classes.packageContainer}>
            {user.packages.length === 0 ? (
              <Typography
                variant="body1"
                className={classes.noPackage}
              >
                {t('profile.noPackage')}
              </Typography>
            ) : (
              <Box display="flex" justifyContent="center" flexDirection="column">
                <Box>
                  {user && user.packages && user.packages.map((data) => (
                    <div key={data.name}>
                      <div className={classes.packages} />
                      <div className={classes.packagesContainer}>
                        <PackageCard packageData={data} key={data.name} />
                      </div>
                    </div>
                  ))}
                </Box>
              </Box>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => (
  {
    props: {
      ssrUser: '',
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
);

export default Profile;
