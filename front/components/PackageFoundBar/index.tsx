import {
  makeStyles, Typography,
} from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  resultBar: {
    display: 'flex',
    width: '100%',
    background: theme.palette.type === 'light' ? 'linear-gradient(90.03deg, rgba(38, 179, 239, 0.2) 12.8%, rgba(255, 112, 68, 0.2) 89.18%)'
      : 'linear-gradient(90.03deg, rgba(38, 179, 239, 0.8) 12.8%, rgba(255, 112, 68, 0.8) 89.18%)',
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
  const { nbPackage } = props;
  const { t } = useTranslation('common');
  const [progessValue, setProgessValue] = useState(0);
  const [textNbPackage, setTextNbPackage] = useState('');
  const resultBarStyle = clsx(classes.resultBar, classes.resultBarSize);

  useEffect(() => {
    process.nextTick(() => (setProgessValue(100)));
    setTimeout(() => {
      setTextNbPackage(`${nbPackage} ${t('found')}`);
    }, 1000);
  }, [nbPackage, t]);

  return (
    <div className={resultBarStyle} style={{ paddingLeft: `${!progessValue ? 0 : 5}%`, width: `${progessValue}%` }}>
      {
        progessValue
          ? (
            <Typography variant="body1" data-testid="number-of-packages">
              {textNbPackage}
            </Typography>
          )
          : null
      }
    </div>
  );
}

export default ResultBar;
