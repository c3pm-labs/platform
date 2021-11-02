import {
  makeStyles, Typography, Hidden,
} from '@material-ui/core';
import React from 'react';

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
    marginTop: theme.spacing(3),
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
    bottom: '-18px',
    width: '100%',
  },
  containerSearchBar: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

function Title(): JSX.Element {
  const classes = useStyles();

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
            Your toolkit to dive into C++ easily
          </Typography>
          <div className={classes.containerAbsoluteSearchBar}>
            <div className={classes.containerSearchBar}>
              <SearchBar
                className={classes.searchBar}
                placeholder="browse packages now !"
              />
            </div>
          </div>
        </div>
      </div>
      <Typography className={classes.subtitle}>
        C++ made easy | Trivial dependency managment | Package sharing
      </Typography>
      <ButtonTitle />
    </div>
  );
}

export default Title;
