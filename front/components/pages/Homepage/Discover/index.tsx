import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Package } from '../../../../types';
import { DISCOVER } from '../../../../queries';
import Loader from '../../../Loader';
import PackageCard from '../../../PackageCard';
import Button from '../../../Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    minHeight: '92vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(124.57deg, rgba(38, 179, 239, 0.2) 37.9%, rgba(255, 112, 68, 0.2) 74.33%)',
    padding: '50px 0',
  },
  packageList: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    margin: '15px 0',
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontSize: '1.4em',
    fontWeight: 600,
  },
  dl: {
    padding: '2px 14px',
    margin: '5px 0',
  },
  red: { background: '#FF7044' },
  orange: { background: '#FFA844' },
  yellow: { background: '#fcc623' },

}));

function Discover(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const {
    data, loading,
  } = useQuery<{ discover: Package[] }>(DISCOVER);

  return (
    <div className={classes.container}>
      <Typography className={classes.subtitle}>
        {t('discover.trending')}
      </Typography>
      <div className={classes.packageList}>
        {loading || !data ? (<Loader size="xl" />) : (data.discover.slice(0, 3).map((p, i) => {
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
        }))}
      </div>
      <Link href="/discover">
        <Button variant="contained" color="primary">{t('buttons.discover')}</Button>
      </Link>
    </div>
  );
}

export default Discover;
