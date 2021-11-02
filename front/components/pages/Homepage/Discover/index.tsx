import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

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
  },
  packageList: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontSize: '1.4em',
    fontWeight: 600,
  },
  dl: {
    padding: '2px 14px',
    margin: '10px 0',
  },
  red: { background: '#FF7044' },
  orange: { background: '#FFA844' },
  yellow: { background: '#fcc623' },

}));

function Discover(): JSX.Element {
  const classes = useStyles();
  const {
    data, loading,
  } = useQuery<{ discover: Package[] }>(DISCOVER);

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <Typography className={classes.subtitle}>
        Discover the trending packages 🔥
      </Typography>
      <div className={classes.packageList}>
        {data.discover.slice(0, 3).map((p, i) => {
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
      <Link href="/discover">
        <Button variant="contained" color="primary">Discover all</Button>
      </Link>
    </div>
  );
}

export default Discover;
