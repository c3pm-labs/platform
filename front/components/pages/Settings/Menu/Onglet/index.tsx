import { useState, useEffect } from 'react';
import {
  makeStyles, Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import Options from '../utils';

const useStyles = makeStyles((theme) => ({
  container: {
    transition: '0.5s',
    height: '2.5em',
    minHeight: '2.5em',
    maxHeight: '2.5em',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 0,
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 0,
    },
  },
  greyOptions: {
    color: `${theme.palette.text.primary}`,
  },
  containerVerticalLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    Width: '4px',
    minWidth: '4px',
    maxWidth: '4px',
  },
  verticalLine: {
    borderRadius: `${theme.shape.borderRadius}px`,
    display: 'flex',
    height: '2.5em',
    border: 'solid',
    width: '0px',
  },
  verticalLineFocused: {
    borderWidth: '2px',
    borderColor: `${theme.palette.primary.main}`,
  },
  verticalLineBlur: {
    borderWidth: '0.5px',
    borderColor: `${theme.palette.text.disabled}`,
  },
  containerTile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    Width: '90px',
    minWidth: '90px',
    maxWidth: '90px',
  },
}));

interface OngletsProps {
  currentFocus: Options;
  title: Options;
  setIsMenu: (newValue: boolean) => void;
  onClick: (newValue: Options) => void;
}

function Onglet(props: OngletsProps): JSX.Element {
  const {
    currentFocus,
    title,
    onClick,
    setIsMenu,
  } = props;
  const classes = useStyles();
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (currentFocus === title) setIsFocus(true);
    else setIsFocus(false);
  }, [currentFocus, title]);

  const handleClassNameVerticalLine = () => (
    clsx((isFocus ? classes.verticalLineFocused : classes.verticalLineBlur), classes.verticalLine)
  );

  return (
    <button type="button" className={classes.container} onClick={(): void => { onClick(title); setIsMenu(false); }}>
      <div className={classes.containerVerticalLine}>
        <div className={handleClassNameVerticalLine()} />
      </div>
      <div className={classes.containerTile}>
        <Typography className={classes.greyOptions}>
          {title}
        </Typography>
      </div>
    </button>
  );
}

export default Onglet;
