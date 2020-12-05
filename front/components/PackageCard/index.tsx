import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Avatar from '../Avatar';
import { Package } from '../../types';
import TextLink from '../TextLink';

export interface PackageCardProps {
  packageData: Package;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    minHeight: '8rem',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      minWidth: '500px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& h5': {
      fontSize: 18,
    },
    marginBottom: theme.spacing(1),
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: theme.spacing(1),
  },
  update: {
    width: '100%',
    textAlign: 'right',
    fontSize: 10,
  },
  description: {
    lineHeight: 1.2,
    fontSize: 14,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1),
  },
  name: {
    fontSize: 14,
  },
}));

function PackageCard({ packageData }: PackageCardProps): JSX.Element {
  const classes = useStyles({ packageData });
  const { name, author, latest } = packageData;
  const date = new Date(latest.publishedAt);

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Typography variant="h5">
          <TextLink href="/package/[name]" as={`/package/${name}`}>{name}</TextLink>
        </Typography>
        <Typography variant="h5" color="primary">{latest.version}</Typography>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography color="textPrimary" variant="body1">{latest.description}</Typography>
      </div>
      <Typography color="textPrimary" variant="body1" className={classes.description}>{latest.description}</Typography>
      <div className={classes.bottom}>
        <Avatar
          user={author}
          classes={{ picture: classes.avatar, name: classes.name }}
        />
        <Typography variant="body2" className={classes.update}>
          Last updated on the&nbsp;
          {date.toDateString()}
        </Typography>
      </div>
    </div>
  );
}

export default PackageCard;