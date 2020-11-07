import React from 'react';
import {
  makeStyles, Typography,
} from '@material-ui/core';

import Button from 'components/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '90px',
    display: 'flex',
    flex: 0.3,
    height: '100%',
    maxHeight: '90px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '200px',
      paddingBottom: theme.spacing(3),
    },
  },
  textButton: {
    color: 'white',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  customButton: {
    maxHeight: '36px',
  },
  description: {
    paddingBottom: theme.spacing(3),
    textAlign: 'center',
    fontWeight: 500,
    opacity: 0.6,
    fontSize: '1.2em',
    color: `${theme.palette.text.primary}`,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1),
    },
  },
}));

interface UpdateButtonProps {
  description: string;
  onClick: () => void;
}

function UpdateButton(props: UpdateButtonProps): JSX.Element {
  const classes = useStyles();
  const {
    description,
    onClick,
  } = props;

  return (
    <div className={classes.container}>
      <Typography className={classes.description}>
        {description}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className={classes.customButton}
        onClick={onClick}
      >
        <Typography className={classes.textButton}>
          Save
        </Typography>
      </Button>
    </div>
  );
}

export default UpdateButton;
