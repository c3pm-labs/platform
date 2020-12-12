import React from 'react';
import { makeStyles } from '@material-ui/core';

import Name from './Name';
import Email from './Email';
import Biography from './Biography';

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

function Profile(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Name />
      <Email />
      <Biography />
    </div>
  );
}

export default Profile;
