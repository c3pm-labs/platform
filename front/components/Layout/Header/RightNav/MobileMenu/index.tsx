import { useLogout, useViewer } from 'hooks/auth';
import { useState, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'next-i18next';

import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';

const useStyles = makeStyles((theme) => ({
  popoverPaper: {
    width: '100%',
    maxHeight: 'unset',
    maxWidth: 'unset',
    left: '0 !important',
    backgroundColor: theme.palette.background.default,
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 3px 3px 0px rgba(0,0,0,0.12)
    `,
  },
  menu: {
    padding: `0 ${theme.spacing(2)}px`,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& > div': {
      marginTop: 0,
    },
    paddingBottom: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
  },
  icon: {
    fontSize: 40,
  },
}));

function MobileMenu(): JSX.Element {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const viewer = useViewer();
  const logout = useLogout();
  const { t } = useTranslation('common');

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} className={styles.iconButton}>
        {anchorEl ? <CloseIcon className={styles.icon} /> : <MenuIcon className={styles.icon} />}
      </IconButton>
      <Menu
        TransitionProps={{ enter: false, appear: true, exit: false }}
        className={styles.menu}
        PopoverClasses={{ paper: styles.popoverPaper }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="menu"
        elevation={0}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ classes: { root: styles.menu } }}
        PaperProps={{ square: true }}
      >
        {viewer ? [
          <Button href={`/user/${viewer.id}`} fullWidth variant="contained" key="settings">
            {t('buttons.profile')}
          </Button>,
          <Button href="/settings" fullWidth variant="outlined" key="settings">
            {t('buttons.settings')}
          </Button>,
          <Button onClick={logout} fullWidth variant="outlined" color="error" key="logout">
            {t('buttons.logout')}
          </Button>,
        ] : [
          <ButtonLink href="/login" fullWidth variant="outlined" key="login">
            {t('buttons.login')}
          </ButtonLink>,
          <ButtonLink href="/register" fullWidth variant="contained" color="primary" key="register">
            {t('buttons.register')}
          </ButtonLink>,
        ]}
      </Menu>
    </>
  );
}

export default MobileMenu;
