import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useViewer } from 'hooks/auth';
import IconButton from '@material-ui/core/IconButton';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/Brightness2';
import { useTranslation } from 'next-i18next';

import ButtonLink from 'components/ButtonLink';
import { useColorTheme } from 'utils/colorTheme';

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
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

function RightNav(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const viewer = useViewer();
  const classes = useStyles();
  const [colorTheme, toggleTheme] = useColorTheme();
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
          <IconButton color="primary" onClick={toggleTheme}>
            {
              colorTheme === 'light' ? <DarkIcon /> : <LightIcon />
            }
          </IconButton>
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
          <IconButton color="primary" onClick={toggleTheme}>
            {
              colorTheme === 'light' ? <DarkIcon /> : <LightIcon />
            }
          </IconButton>
        </div>
      )}
    </>
  );
}

export default RightNav;
