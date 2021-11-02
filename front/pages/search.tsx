import { getDataFromTree } from '@apollo/react-ssr';
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

import withApollo from 'utils/withApollo';
import Head from 'components/Head';
import Layout from 'components/Layout';
import PackageCard from 'components/PackageCard';
import WrappedLoader from 'components/WrappedLoader';
import PackageFoundBar from 'components/PackageFoundBar';

import { tagsList } from '../utils/constant';
import Button from '../components/Button';

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
  line: {
    width: '100%',
    height: '1px',
    margin: '20px 0',
    [theme.breakpoints.down('xs')]: {
      height: 0,
      margin: '10px 0',
    },
    backgroundColor: theme.palette.grey[400],
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
  tagsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    flexWrap: 'wrap',
  },
  tag: {
    margin: `0 ${theme.spacing(1)}px`,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
}));

function Search(): JSX.Element {
  const router = useRouter();
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  // tags is of type string, it has the following format: tag1,tag2,tag3
  const { q, tags, page = 1 } = router.query;
  const selectedTags = typeof tags === 'string' && tags.length > 0 ? tags.split(',') : [];
  const baseIndex = Number(page) * 5 - 5;
  const { data, loading } = useQuery<{ search: Package[] }>(SEARCH, {
    variables: { keyword: q ?? '', tags: selectedTags },
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
            {idx !== 0 && <div className={classes.line} />}
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
  const searchByTag = (tag: string) => {
    const isPresent = selectedTags.find((e) => e === tag);
    const newTags = isPresent ? selectedTags.filter((e) => e !== tag).join(',') : selectedTags.concat(tag).join(',');
    router.push({ pathname: '/search', query: { q, ...(newTags.length > 0 ? { tags: newTags } : {}), ...(page ? { page } : {}) } });
  };

  return (
    <Layout>
      <Head title="Search" />
      <PackageFoundBar nbPackage={data ? data.search.length : 0} />
      <div className={classes.tagsContainer}>
        {tagsList.map((tag) => {
          const isSelected = selectedTags.find((e) => e === tag);
          return (
            <Button onClick={() => searchByTag(tag)} type="button" key={tag} variant={isSelected ? 'contained' : 'outlined'} className={classes.tag}>
              {tag}
            </Button>
          );
        })}
      </div>
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
              <PaginationItem
                {...item}
                className={classes.numberButton}
                component="a"
                href={`/search?q=${q}&page=${item.page}`}
              />
            )}
          />
        </div>
      )}
    </Layout>
  );
}

export default withApollo(Search, { getDataFromTree });
