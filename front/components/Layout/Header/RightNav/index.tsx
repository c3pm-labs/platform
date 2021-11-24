import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useViewer } from 'hooks/auth';
import { useTranslation } from 'next-i18next';

import ButtonLink from 'components/ButtonLink';

import LanguageMenu from '../LanguageMenu';

import MobileMenu from './MobileMenu';
import UserCard from './UserCard';

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    padding: 0,
  },
  marginRight: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

function RightNav(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const viewer = useViewer();
  const classes = useStyles();
  const { t } = useTranslation('common');

  if (isMobile) {
    return (
      <MobileMenu />
    );
  }

  return (
    <>

      { viewer ? (
        <div className={classes.buttons}>
          <LanguageMenu isUserLoggedIn />
          <UserCard />
        </div>
      ) : (
        <div className={classes.buttons}>
          <ButtonLink href="/login" className={classes.marginRight} variant="outlined">
            {t('buttons.login')}
          </ButtonLink>
          <ButtonLink href="/register" className={classes.marginRight} variant="contained">
            {t('buttons.register')}
          </ButtonLink>
          <LanguageMenu isUserLoggedIn={false} />
        </div>
      )}
    </>
  );
}

export default RightNav;
