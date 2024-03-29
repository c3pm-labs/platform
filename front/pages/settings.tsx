import React, { useState } from 'react';
import { Hidden, makeStyles } from '@material-ui/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { NextPage, GetStaticProps } from 'next';

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

const Settings: NextPage = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');
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
          { currentFocus === Options.PROFILE && <Profile />}
          { currentFocus === Options.SECURITY && <Security />}
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
              <BackButton title={t(currentFocus)} goBack={(): void => setIsMenu(true)} />
              { currentFocus === Options.PROFILE && <Profile />}
              { currentFocus === Options.SECURITY && <Security />}
            </div>
          )}
      </Hidden>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => (
  {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
);

export default Settings;
