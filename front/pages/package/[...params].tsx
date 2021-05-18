import { useQuery } from '@apollo/client';
import Link from 'next/link';
import React, { useState } from 'react';
import sermver from 'semver';
import { useRouter } from 'next/router';
import { getDataFromTree } from '@apollo/react-ssr';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Version } from 'types';
import { PACKAGE_FROM_VERSION } from 'queries';

import InstallButton from 'components/pages/packages/InstallButton';
import Head from 'components/Head';
import Layout from 'components/Layout';
import withApollo from 'utils/withApollo';
import TabPanel from 'components/pages/packages/TabPanel';
import MarkdownDisplayer from 'components/pages/packages/MarkdownDisplayer';
import VersionList from 'components/pages/packages/VersionList';
import WrappedLoader from 'components/WrappedLoader';

import PageNotFound from '../404';
import Avatar from '../../components/Avatar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2),
    },
  },
  containerLoader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
  },
  tab: {
    '& .MuiTab-root': {
      color: theme.palette.grey[500],
      [theme.breakpoints.down('xs')]: {
        width: '50%',
      },
    },
    '& .Mui-selected': {
      color: theme.palette.primary.main,
    },
    '& .MuiTabs-fixed > span': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    '& h1': {
      color: theme.palette.primary.main,
      margin: `${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px 0`,
      [theme.breakpoints.down('xs')]: {
        margin: `${theme.spacing(1)}px 0`,
      },
    },
  },
  version: {
    fontWeight: 500,
    fontSize: 18,
  },
  description: {
    color: theme.palette.grey[500],
    marginBottom: theme.spacing(2),
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
  update: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  picture: {
    height: 30,
    width: 30,
  },
  name: {
    color: theme.palette.text.primary,
  },
  separator: {
    width: 1,
    margin: `0 ${theme.spacing(1)}px`,
    height: 28,
    backgroundColor: theme.palette.grey[300],
  },
  line: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'baseline',
    width: '100%',
  },
  widthAuto: {
    width: 'auto',
  },
  alignCenter: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  tagsContainer: {
    display: 'flex',
  },
  tag: {
    fontSize: 12,
    marginRight: 5,
    color: theme.palette.text.primary,
    background: 'rgba(0,184,230, 0.3)', // main with opacity
    borderRadius: theme.shape.borderRadius,
    padding: 3,
  },
}));

function PackageDetails(): JSX.Element {
  const router = useRouter();
  const packageName = router.query.params[0];
  const packageVersion = (router.query.params[1] && sermver.valid(router.query.params[1])) || null;

  const { data, loading, error } = useQuery<{ version: Version }>(PACKAGE_FROM_VERSION, {
    variables: {
      packageName,
      version: packageVersion,
    },
  });
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  if (loading) {
    return (
      <Layout>
        <Head title={packageVersion ? `${packageName} - ${packageVersion}` : packageName} />
        <div className={classes.containerLoader}>
          <WrappedLoader />
        </div>
      </Layout>
    );
  }
  if (error) {
    return (<PageNotFound />);
  }

  return (
    <Layout>
      <Head title={packageVersion ? `${packageName} - ${packageVersion}` : packageName} />
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={`${classes.spaceBetween} ${classes.line}`}>
            <div className={`${classes.widthAuto} ${!isMobile && classes.line}`}>
              <h1 data-testid="name">{data.version.package.name}</h1>
              <span className={classes.version} data-testid="version">
                v
                {data.version.version}
              </span>
            </div>
            {!isMobile && (
              <InstallButton packageName={data.version.package.name} />
            )}
          </div>
          <div className={classes.description}>{data.version.description}</div>
          <div className={`${classes.line} ${classes.alignCenter}`}>
            { data.version.package.tags?.length > 0 ? (
              <>
                <div className={classes.tagsContainer}>
                  {data.version.package.tags?.map(
                    (tag) => <span className={classes.tag}>{tag}</span>)}
                </div>
                <div className={classes.separator} />
              </>
            ) : null}
            <span className={classes.update}>
              Last updated on&nbsp;
              {(new Date(data.version.package.latest.publishedAt)).toDateString()}
            </span>
            <div className={classes.separator} />
            <Link href="/user/[id]" as={`/user/${data.version.package.author.id}`} passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={classes.avatar} data-testid="author">
                <Avatar
                  user={data.version.package.author}
                  classes={
                    { container: classes.avatar, picture: classes.picture, name: classes.name }
                  }
                />
              </a>
            </Link>
          </div>
        </div>
        <Tabs value={currentTab} onChange={handleChange} aria-label="package tabs" className={classes.tab}>
          <Tab label="Readme" id="package-tab-1" aria-controls="package-tabpanel-1" />
          <Tab label="Versions" id="package-tab-2" aria-controls="package-tabpanel-2" />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          <MarkdownDisplayer source={data.version.readme} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <VersionList
            versions={data.version.package.versions}
            packageName={data.version.package.name}
          />
        </TabPanel>
      </div>
    </Layout>
  );
}

export default withApollo(PackageDetails, { getDataFromTree });
