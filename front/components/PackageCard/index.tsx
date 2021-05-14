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
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-end',
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

function PackageCard({ packageData }: PackageCardProps): JSX.Element {
  const classes = useStyles({ packageData });
  const { name, author, tags, latest } = packageData;
  const date = new Date(latest.publishedAt);

  return (
    <div className={classes.container} data-testid={`packageCard-${name}`}>
      <div className={classes.top}>
        <Typography variant="h5" data-testid={`packageCard-${name}-name`}>
          <TextLink href="/package/[name]" as={`/package/${name}`}>{name}</TextLink>
        </Typography>
        <Typography variant="h5" color="primary" data-testid={`packageCard-${name}-version`}>{latest.version}</Typography>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography color="textPrimary" variant="body1">{latest.description}</Typography>
      </div>
      <div className={classes.tagsContainer}>
        {tags?.map((tag) => <span key={tag} className={classes.tag}>{tag}</span>)}
      </div>
      <div className={classes.bottom}>
        <Avatar
          user={author}
          classes={{ picture: classes.avatar, name: classes.name }}
        />
        <Typography variant="body2" className={classes.update}>
          Last updated on&nbsp;
          {date.toDateString()}
        </Typography>
      </div>
    </div>
  );
}

export default PackageCard;
