import React from 'react';
import {
  makeStyles, Typography,
} from '@material-ui/core';

import TextInput from 'components/TextInput';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '290px',
    display: 'flex',
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      paddingLeft: 0,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      paddingBottom: theme.spacing(1),
    },
  },
  label: {
    minWidth: '90px',
    display: 'flex',
    flex: 0.2,
    paddingRight: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 500,
    opacity: 0.6,
    fontSize: '1.2em',
    whiteSpace: 'nowrap',
    color: `${theme.palette.text.primary}`,
  },
  containerTextInput: {
    display: 'flex',
    flex: 0.8,
    minWidth: '160px',
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      width: '100%',
    },
  },
}));

export interface InputFiedProps {
  label?: string;
  value: string;
  rows?: number;
  name: string;
  multiline?: boolean;
}

function InputFied(props: InputFiedProps): JSX.Element {
  const classes = useStyles();
  const {
    label,
    value,
    rows = 1,
    multiline = false,
    name,
  } = props;

  return (
    <div className={classes.container}>
      {label && (
      <Typography className={classes.label}>
        {label}
      </Typography>
      )}
      <div className={classes.containerTextInput}>
        <TextInput
          name={name}
          placeholder={value}
          type="search"
          disableHelperText
          fullWidth
          rows={rows}
          multiline={multiline}
        />
      </div>
    </div>
  );
}

export default InputFied;
