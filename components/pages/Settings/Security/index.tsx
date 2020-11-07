import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';

import Password from './Password';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 0.61,
    paddingLeft: theme.spacing(3),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
}));

function Security(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Password />
    </div>
  );
}

export default Security;
