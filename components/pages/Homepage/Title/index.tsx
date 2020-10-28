import {
  makeStyles, Typography, Hidden,
} from '@material-ui/core';
import clsx from 'clsx';

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
    paddingTop: `${theme.spacing(10)}px`,
    paddingBottom: `${theme.spacing(5)}px`,
    paddingLeft: `${theme.spacing(2)}px`,
    paddingRight: `${theme.spacing(2)}px`,
  },
  containerMainInfo: {
    display: 'flex',
    minHeight: '55vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleBaseline: {
    color: theme.palette.text.primary,
    fontSize: '2.3em',
  },
  styleDefinitionC3PM: {
    color: theme.palette.grey[700],
    fontSize: '2em',
  },
  defaultStyleText: {
    textAlign: 'center',
    fontWeight: 500,
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
      <div className={classes.containerMainInfo}>
        <Hidden implementation="css" mdDown>
          <Logo type="baseline" size="xl" />
        </Hidden>
        <Hidden implementation="css" lgUp>
          <Logo type="baseline" size="lg" />
        </Hidden>
        <div className={classes.minSpacingFantom} />
        <Typography className={clsx(classes.styleBaseline, classes.defaultStyleText)}>
          Your toolkit to dive into C++ easily
        </Typography>
        <div className={classes.minSpacingFantom} />
        <ButtonTitle />
      </div>
      <Typography className={clsx(classes.styleDefinitionC3PM, classes.defaultStyleText)}>
        C++ made easy | Trivial dependency managment | Package sharing
      </Typography>
    </div>
  );
}

export default Title;
