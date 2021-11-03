import { makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import type { NextPage, GetStaticProps } from 'next';

import Layout from 'components/Layout';
import Head from 'components/Head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Button from '../components/Button';
import PackageCard from '../components/PackageCard';
import { DISCOVER } from '../queries';
import Loader from '../components/Loader';
import { Package } from '../types';

const about = {
  total: 18,
  dl: 307,
  edited: 56,
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px 0px`,
  },
  subTitle: { fontSize: 24 },
  highlight: {
    color: theme.palette.primary.main,
  },
  title: {
    fontSize: 32,
  },
  about: {
    fontSize: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  info: {
    borderRadius: 100,
    border: `1px solid ${theme.palette.primary.main}`,
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.primary.main,
    marginRight: 30,
    padding: '0px 12px',
  },
  button: {
    margin: '20px 0',
    fontSize: 18,
  },
  packageList: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  dl: {
    padding: '2px 14px',
    margin: '10px 0',
  },
  red: { background: '#FF7044' },
  orange: { background: '#FFA844' },
  yellow: { background: '#fcc623' },
}));

const Discover: NextPage = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const {
    data, loading,
  } = useQuery<{ discover: Package[] }>(DISCOVER);

  if (loading || !data) {
    return <Loader />;
  }

  const totalDownloads = data.discover.reduce((acc, pkg) => acc + pkg.downloads, 0);

  return (
    <Layout>
      <Head title="c3pm" />
      <div className={classes.container}>
        <h1 className={classes.title}>{t('discover.all')}</h1>
        <span className={classes.subTitle}>
          {t('discover.currently')}
          <span className={classes.highlight}>
            {' '}
            {about.total}
          </span>
          {' '}
          {t('discover.publishedPackages')}
        </span>
        <Link href="/search?q=&page=1">
          <Button variant="outlined" className={classes.button}>{t('discover.see')}</Button>
        </Link>
      </div>
      <div className={classes.about}>
        <div className={classes.info}>i</div>
        <div>

          <span>{t('discover.weHave')}</span>
          <br />
          <span>
            -
            {' '}
            <span className={classes.highlight}>
              {data.discover.length}
              {' '}
              {t('discover.published')}
              {' '}
            </span>
            {t('discover.packages')}
          </span>
          <br />
          <span>
            -
            {' '}
            <span className={classes.highlight}>
              {totalDownloads}
              {' '}
              {t('discover.downloaded')}
              {' '}
            </span>
            {t('discover.packages')}
          </span>
        </div>
      </div>
      <div className={classes.container}>
        <h1 className={classes.title}>{t('discover.trending')}</h1>
        <div className={classes.packageList}>
          {data.discover.map((p, i) => {
            const getColor = () => {
              if (i <= data.discover.length / 3) return classes.red;
              if (i >= (data.discover.length / 3) * 2) return classes.yellow;
              return classes.orange;
            };
            return (
              <div className={classes.dl} key={p.name}>
                <PackageCard packageData={p} discover={getColor()} />
              </div>
            );
          })}
        </div>

      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};


export default Discover;
