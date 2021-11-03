import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import semver from 'semver';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Version } from 'types';
import { PACKAGE_FROM_VERSION } from 'queries';

import Head from 'components/Head';
import Layout from 'components/Layout';
import TabPanel from 'components/pages/packages/TabPanel';
import MarkdownDisplayer from 'components/pages/packages/MarkdownDisplayer';
import VersionList from 'components/pages/packages/VersionList';
import WrappedLoader from 'components/WrappedLoader';

import PageNotFound from '../404';
import Presentation from '../../components/pages/packages/Presentation';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
  containerBody: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2),
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
  readmeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
}
));

function PackageDetails(): JSX.Element {
  const router = useRouter();
  const packageName = router.query.params[0];
  const packageVersion = (router.query.params[1] && semver.valid(router.query.params[1])) || null;

  const { data, loading, error } = useQuery<{ version: Version }>(PACKAGE_FROM_VERSION, {
    variables: {
      packageName,
      version: packageVersion,
    },
  });
  const classes = useStyles();
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
        <Presentation version={data.version} />
        <div className={classes.containerBody}>
          <Tabs value={currentTab} onChange={handleChange} aria-label="package tabs" className={classes.tab}>
            <Tab label="Readme" id="package-tab-1" aria-controls="package-tabpanel-1" />
            <Tab label="Versions" id="package-tab-2" aria-controls="package-tabpanel-2" />
          </Tabs>
          <TabPanel value={currentTab} index={0}>
            <MarkdownDisplayer source={data.version.readme} />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <VersionList
              authorId={data.version.package.author.id}
              versions={data.version.package.versions}
              packageName={data.version.package.name}
            />
          </TabPanel>
        </div>
      </div>
    </Layout>
  );
}

export default PackageDetails;
