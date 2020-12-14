import React from 'react';
import {
  makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'fit-content',
    minHeight: '200px',
    width: '100%',
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      minHeight: '100px',
    },
  },
  containerContent: {
    display: 'flex',
    flex: 1,
    width: '100%',
    minHeight: 'fit-content',
    height: 'fit-content',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  blueTitle: {
    color: `${theme.palette.primary.main}`,
    fontSize: '1.8em',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1),
    },
  },
  wrapperTitle: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  horizonLine: {
    display: 'flex',
    width: '100%',
    opacity: 0.4,
    border: 'solid',
    height: '0px',
    borderWidth: '0.1px',
    borderRadius: `${theme.shape.borderRadius}px`,
    borderColor: `${theme.palette.text.disabled}`,
  },
}));

interface SettingWrapperProps {
  title: string;
  children: React.ReactNode;
}

function SettingWrapper(props: SettingWrapperProps): JSX.Element {
  const {
    title,
    children,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapperTitle}>
        <Typography className={classes.blueTitle}>
          {title}
        </Typography>
      </div>
      <div className={classes.containerContent}>
        {children}
      </div>
      <div className={classes.horizonLine} />
    </div>
  );
}

export default SettingWrapper;
