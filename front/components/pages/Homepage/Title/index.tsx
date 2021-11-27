import {
  makeStyles, Typography, Hidden,
} from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import SearchBar from 'components/Layout/Header/SearchBar';
import Logo from 'components/Logo';

import ButtonTitle from './ButtonTitle';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: `${theme.breakpoints.values.sm}px`,
    minWidth: '100vw',
    height: '92vh',
    width: '100vw',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.85em',
    },
    paddingBottom: theme.spacing(6),
  },
  content: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing(8),
  },
  baseline: {
    color: theme.palette.text.primary,
    fontSize: '2em',
    marginTop: theme.spacing(4),
    textAlign: 'center',
    fontWeight: 500,
  },
  subtitle: {
    color: theme.palette.grey[700],
    fontSize: '1.4em',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(7),
    textAlign: 'center',
  },
  minSpacingFantom: {
    minHeight: '3em',
    minWidth: '3em',
  },
  backgroundTitle: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
    background: 'linear-gradient(104.37deg, rgba(38, 179, 239, 0.2) 47.39%, rgba(255, 112, 68, 0.2) 78.49%)',
    width: '100%',
    position: 'relative',
  },
  containerHead: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    width: '70%',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.08))',
  },
  containerAbsoluteSearchBar: {
    position: 'absolute',
    bottom: '-35px',
    width: '100%',
  },
  containerSearchBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  seeMore: {
    border: 'none',
    background: 'transparent',
    fontSize: 11,
    outlined: 'none',
    textDecoration: 'underline',
    color: theme.palette.primary.main,
  },
}));

function Title(): JSX.Element {
  const classes = useStyles();
  const [seeMore, setSeeMore] = useState(false);
  const { t } = useTranslation('common');

  return (
    <div className={classes.container}>
      <div className={classes.containerHead}>
        <div className={classes.backgroundTitle}>
          <Hidden implementation="css" xsDown>
            <Logo type="baseline" size="xl" />
          </Hidden>
          <Hidden implementation="css" smUp>
            <Logo type="baseline" size="lg" />
          </Hidden>
          <Typography className={classes.baseline}>
            {t('home.title')}
          </Typography>
          <div className={classes.containerAbsoluteSearchBar}>
            <div className={classes.containerSearchBar}>
              <SearchBar
                className={classes.searchBar}
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.c3pm.io/help/searchbar"
                className={classes.seeMore}
              >
                {t('home.seeMore')}

              </a>
            </div>
          </div>
        </div>
      </div>
      <Typography className={classes.subtitle}>
        {t('home.easy')}
        |
        {t('home.trivial')}
        |
        {t('home.sharing')}
      </Typography>
      <ButtonTitle />
    </div>
  );
}

export default Title;
