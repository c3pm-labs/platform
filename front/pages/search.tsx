import {
  makeStyles, useTheme,
} from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Package } from 'types';
import { useQuery } from '@apollo/client';
import { SEARCH } from 'queries';
import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'components/Head';
import Layout from 'components/Layout';
import PackageCard from 'components/PackageCard';
import WrappedLoader from 'components/WrappedLoader';
import PackageFoundBar from 'components/PackageFoundBar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px 0',
    margin: `0 ${theme.spacing(1)}px`,
    [theme.breakpoints.up('sm')]: {
      padding: '30px 0',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },
  containerLoader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: '50px',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    maxWidth: 600,
    margin: '10px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  numberButton: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,

    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
  },
  tag: {
    margin: `0 ${theme.spacing(1)}px`,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
}));

const Search: NextPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { q, page = 1 } = router.query;
  const baseIndex = Number(page) * 5 - 5;
  const { data, loading } = useQuery<{ search: Package[] }>(SEARCH, {
    variables: { keyword: q ?? '' },
  });

  const numberOfPages = () => {
    if (data && data.search.length > 5) {
      return Math.ceil(data.search.length / 5);
    }
    return 0;
  };

  const packages = (): JSX.Element[] => {
    if (!data) return null;
    const list = [];

    for (let idx = 0; idx !== 5; idx += 1) {
      const packageData: Package = data.search[baseIndex + idx];

      if (packageData) {
        list.push(
          <div className={classes.list} key={packageData.name}>
            <PackageCard packageData={packageData} key={packageData.name} />
          </div>,
        );
      }
    }
    return list;
  };

  if (loading) {
    return (
      <Layout>
        <Head title="Search" />
        <div className={classes.containerLoader}>
          <WrappedLoader />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head title="Search" />
      <PackageFoundBar nbPackage={data ? data.search.length : 0} />
      <div className={classes.container}>
        {packages()}
      </div>
      {numberOfPages() > 0 && (
        <div className={classes.footer}>
          <Pagination
            page={Number(page)}
            count={numberOfPages()}
            size={isMobile ? 'small' : 'medium'}
            renderItem={(item) => (
              <Link href={`/search?q=${q ?? ''}&page=${item.page}`}>
                <PaginationItem
                  {...item}
                  className={classes.numberButton}
                />
              </Link>
            )}
          />
        </div>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => (
  {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
);
export default Search;
