import { getDataFromTree } from '@apollo/react-ssr';
import React from 'react';
import { makeStyles, Typography, Hidden } from '@material-ui/core';

import withApollo from 'utils/withApollo';
import Layout from 'components/Layout';
import Button from 'components/Button';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Package } from 'types';
import { SEARCH } from 'queries';
import PackageCard from 'components/PackageCard';
import Head from 'components/Head';
import { tagsList } from 'utils/constant';
import Logo from 'components/Logo';

const useStyles = makeStyles((theme) => ({
  containerRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerExplorer: {
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(13),
    fontSize: 18,
    color: theme.palette.primary.main,
  },
  containerPopular: {
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(40),
    fontSize: 18,
    color: theme.palette.primary.main,
  },

  packages: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '50%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  tags: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '27%',
    marginLeft: theme.spacing(22),
    marginTop: theme.spacing(3),

  },
  explorer: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    fontSize: 18,
    color: theme.palette.primary.main,
  },
  logo: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(1),    
  },
  list: {
    width: '100%',
    height: '1px',
    margin: '20px 0',
    [theme.breakpoints.down('xs')]: {
      height: 0,
      margin: '10px 0',
    },
    backgroundColor: theme.palette.grey[400],
  },
  lineExplorer: {
    width: '50%',
    justifyContent: 'center',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    marginLeft: theme.spacing(15),
  },
  linePopular: {
    width: '80%',
    justifyContent: 'center',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
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
  footer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: '50px',
    alignItems: 'center',
  },
}));

function Explorer(): JSX.Element {
  const router = useRouter();
  const classes = useStyles();
  const { q, tags, page = 1 } = router.query;
  const selectedTags = typeof tags === 'string' && tags.length > 0 ? tags.split(',') : [];
  const baseIndex = Number(page) * 10 - 10;
  const { data, loading } = useQuery<{ search: Package[] }>(SEARCH, {
    variables: { keyword: q ?? '', tags: selectedTags },
  });

  const packages = (): JSX.Element[] => {
    if (!data) return null;
    const list = [];

    for (let idx = 0; idx !== 10; idx += 1) {
      const packageData: Package = data.search[baseIndex + idx];

      if (packageData) {
        list.push(
          <div style={{ display: 'flex', flexDirection: 'column' }} key={packageData.name}>
            {idx !== 0 && <div className={classes.list} />}
            <PackageCard packageData={packageData} key={packageData.name} />
          </div>,
        );
      }
    }
    return list;
  };
  const searchByTag = (tag: string) => {
    const isPresent = selectedTags.find((e) => e === tag);
    const newTags = isPresent ? selectedTags.filter((e) => e !== tag).join(',') : selectedTags.concat(tag).join(',');
    router.push({ pathname: '/search', query: { q, ...(newTags.length > 0 ? { tags: newTags } : {}), ...(page ? { page } : {}) } });
  };

  if (loading) {
    return (
      <Layout>
        <Head title="Search" />
        <span>Loading...</span>
      </Layout>
    );
  }

  return (
      <Layout>
        <div className={classes.containerRow}>
        <div className={classes.containerColumn}>
          <div className={classes.lineExplorer}>
            <div className={classes.containerRow}>
              <div className={classes.logo}>
                <Logo type="mini" size="sm" />
              </div>
            <div className={classes.containerExplorer}>
                <Typography
                    variant="subtitle1"
                >
                    Packages Explorer
                </Typography>
                </div>
              </div>
            </div>
            {tagsList.map((tag) => {
              return (
                <Button color={'primary'} onClick={() => searchByTag(tag)} type="button" key={tag} variant={'contained'} className={classes.tags} >
                  {tag}
                </Button>
              );
            })}
        </div>
        <div className={classes.containerColumn}>
          <div className={classes.linePopular}>
          <div className={classes.containerRow}>
              <div className={classes.logo}>
                <Logo type="mini" size="sm" />
              </div>
            <div className={classes.containerPopular}>
                <Typography
                    variant="subtitle1"
                >
                    Popular Libraries
                </Typography>
                </div>
              </div>

            </div>
            <div className={classes.packages}>
              {packages()}
            </div>
          </div>
          
      </div>
    </Layout>

  );
}

export default withApollo(Explorer, { getDataFromTree });
