import React from 'react';
import {
  makeStyles, Typography,
} from '@material-ui/core';
import { useTranslation } from 'next-i18next';

import Onglet from './Onglet';
import Options from './utils';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '140px',
    width: '160px',
    maxWidth: '160px',
    display: 'flex',
    flex: 1,
    borderWidth: '1px',
    border: 'solid',
    borderRadius: `${theme.shape.borderRadius}px`,
    borderColor: `${theme.palette.text.disabled}`,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      fontSize: '1.2em',
      maxWidth: '200px',
    },
  },
  blueTitle: {
    color: `${theme.palette.primary.main}`,
    fontWeight: 500,
    fontSize: '1.2em',
    paddingBottom: `${theme.spacing(1)}px`,
  },
  options: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

interface MenuProps {
  currentFocus: Options;
  setCurrentFocus: (newValue: Options) => void;
  setIsMenu: (newValue: boolean) => void;
}

function Menu(props: MenuProps): JSX.Element {
  const {
    currentFocus,
    setCurrentFocus,
    setIsMenu,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={classes.container}>
      <Typography className={classes.blueTitle}>
        {t('settings.menu.title')}
      </Typography>
      <div className={classes.options}>
        <Onglet
          title={Options.PROFILE}
          currentFocus={currentFocus}
          onClick={setCurrentFocus}
          setIsMenu={setIsMenu}
        />
        <Onglet
          title={Options.SECURITY}
          currentFocus={currentFocus}
          onClick={setCurrentFocus}
          setIsMenu={setIsMenu}
        />
      </div>
    </div>
  );
}

export default Menu;
