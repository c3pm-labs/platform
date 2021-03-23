import {
  makeStyles, Typography, Hidden,
} from '@material-ui/core';

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
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  subtitle: {
    color: theme.palette.grey[700],
    fontSize: '1.4em',
  },
  minSpacingFantom: {
    minHeight: '3em',
    minWidth: '3em',
  },
}));

function Title(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <>
        <Hidden implementation="css" xsDown>
          <Logo type="baseline" size="xl" />
        </Hidden>
        <Hidden implementation="css" smUp>
          <Logo type="baseline" size="lg" />
        </Hidden>
      </>
      <div className={classes.content}>
        <Typography className={classes.baseline}>
          Your toolkit to dive into C++ easily
        </Typography>
        <ButtonTitle />
      </div>
      <Typography className={classes.subtitle}>
        C++ made easy | Trivial dependency managment | Package sharing
      </Typography>
    </div>
  );
}

export default Title;
