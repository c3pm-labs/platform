import {
  makeStyles, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  resultBar: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    fontSize: '20px',
    color: 'white',
    maxHeight: '30px',
    height: '30px',
    alignItems: 'center',
    textOverflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: '2px 0',
      paddingLeft: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  resultBarSize: {
    transition: '1.5s ease',
    transitionDelay: '0.5s',
  },
}));

export interface ResultBarProps {
  nbPackage?: number
}

function ResultBar(props: ResultBarProps): JSX.Element {
  const classes = useStyles();
  const [progessValue, setProgessValue] = useState(0)
  const [textNbPackage, setTextNbPackage] = useState('')
  const resultBarStyle = clsx(classes.resultBar, classes.resultBarSize);
  useEffect(() => {
    process.nextTick(() => (setProgessValue(100)))
    setTimeout(() => {
      setTextNbPackage(props.nbPackage + ' ' + 'packages found');
    }, 1000);
  }, [])

  return (
    <div className={resultBarStyle} style={{paddingLeft: `${!progessValue ? 0 : 5}%`, width: `${progessValue}%`}}>
      {
        progessValue ?
            <Typography variant="body1" data-testid="number-of-packages">
              {textNbPackage}
            </Typography>
        : null
      }
    </div>
  );
}

export default ResultBar;
