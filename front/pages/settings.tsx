import React, { useState } from 'react';
import { Hidden, makeStyles } from '@material-ui/core';

import withApollo from 'utils/withApollo';
import Layout from 'components/Layout';
import Menu from 'components/pages/Settings/Menu';
import Options from 'components/pages/Settings/Menu/utils';
import Profile from 'components/pages/Settings/Profile';
import Security from 'components/pages/Settings/Security';
import BackButton from 'components/pages/Settings/BackButton';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  wrapperMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.22,
    paddingTop: theme.spacing(6),
  },
  wrapperOptionMobile: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

type OptionsConvert = {
  [key in Options]: JSX.Element;
};

const optionsTable: OptionsConvert = {
  [Options.PROFILE]: <Profile />,
  [Options.SECURITY]: <Security />,
};

function Settings(): JSX.Element {
  const classes = useStyles();
  const [currentFocus, setCurrentFocus] = useState(Options.PROFILE);
  const [isMenu, setIsMenu] = useState(true);

  return (
    <Layout>
      <Hidden implementation="css" xsDown>
        <div className={classes.container}>
          <div className={classes.wrapperMenu}>
            <Menu
              currentFocus={currentFocus}
              setCurrentFocus={setCurrentFocus}
              setIsMenu={setIsMenu}
            />
          </div>
          {optionsTable[currentFocus]}
        </div>
      </Hidden>
      <Hidden implementation="css" smUp>
        { isMenu
          ? (
            <div className={classes.wrapperMenu}>
              <Menu
                currentFocus={currentFocus}
                setCurrentFocus={setCurrentFocus}
                setIsMenu={setIsMenu}
              />
            </div>
          )
          : (
            <div className={classes.wrapperOptionMobile}>
              <BackButton title={currentFocus} goBack={(): void => setIsMenu(true)} />
              {optionsTable[currentFocus]}
            </div>
          )}
      </Hidden>
    </Layout>
  );
}

export default withApollo(Settings);
