import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Avatar from '../Avatar';
import { Package } from '../../types';
import TextLink from '../TextLink';

export interface PackageCardProps {
  packageData: Package;
  discover?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    minHeight: '8rem',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.12)',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      minWidth: '600px',
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
      fontWeight: 'bold',
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
    fontWeight: 400,
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
    fontWeight: 'bold',
    marginRight: 5,
    color: theme.palette.text.primary,
    background: 'rgba(0,184,230, 0.3)', // main with opacity
    borderRadius: theme.shape.borderRadius,
    padding: '3px 6px',
  },
  downloads: {
    borderRadius: 7,
    padding: '2px 8px',
    color: 'white',
  },
}));

function PackageCard({ packageData, discover = undefined }: PackageCardProps): JSX.Element {
  const classes = useStyles({ packageData });
  const router = useRouter();
  const { t } = useTranslation('common');
  const {
    name, author, tags, latest, downloads,
  } = packageData;
  const date = new Date(latest.publishedAt);
  const url = `/package/${name}/${latest.version}`;

  return (
    <div className={classes.container} data-testid={`packageCard-${name}`}>
      <div className={classes.top}>
        <Typography variant="h5" data-testid={`packageCard-${name}-name`}>
          <TextLink href={url} as={url}>
            {name}
            <span style={{ fontSize: 14 }}>
              {' v'}
              {latest.version}
            </span>
          </TextLink>
        </Typography>
        <div className={discover ? clsx(classes.downloads, discover) : classes.description}>
          {!discover ? '🔥' : null}
          {downloads}
          {discover
            ? (
              <span style={{ fontSize: 10 }}>
                {t('downloads')}
              </span>
            ) : null}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', overflowWrap: 'break-word' }}>
        <Typography color="textPrimary" variant="body1" style={{ width: '100%' }}>{latest.description}</Typography>
      </div>
      <div className={classes.tagsContainer}>
        {tags.slice(0, 3)?.map((tag) => <span key={`tag-${tag}-${name}`} className={classes.tag}>{tag}</span>)}
      </div>
      <div className={classes.bottom}>
        <Avatar
          user={author}
          classes={{ picture: classes.avatar, name: classes.name }}
        />
        <Typography variant="body2" className={classes.update}>
          {t('lastUpdated')}
          &nbsp;
          {router.locale === 'en' ? date.toDateString() : date.toLocaleDateString()}
        </Typography>
      </div>
    </div>
  );
}

export default PackageCard;
