import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useLogout, useViewer } from 'hooks/auth';
import { useRouter } from 'next/router';

import MenuItemLink from 'components/Layout/Header/RightNav/UserCard/MenuItemLink';
import Avatar from 'components/Avatar';

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: 6,
    paddingRight: 0,
    outline: 'none',
    backgroundColor: 'transparent',
  },
  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: `0 ${theme.spacing(1)}px`,
  },
  logout: {
    fontWeight: 'bold',
    color: theme.palette.error.main,
  },
  optionContainer: {
    '& .MuiList-root': {
      padding: 0,
    },
    backgroundColor: theme.palette.grey[200],
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    width: 150,
  },
  option: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  popper: {
    zIndex: 1301,
  },
}));

function UserCard(): JSX.Element {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const classes = useStyles();
  const viewer = useViewer();
  const router = useRouter();
  const logout = useLogout();
  const handleLogout = async () => {
    await router.push({ pathname: '/' });
    await logout();
  };

  if (!viewer) {
    return null;
  }

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<HTMLLIElement | Document, MouseEvent>): void => {
    if (anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <button
        className={classes.card}
        type="button"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        data-testid="user-menu"
      >
        <Avatar
          classes={{ picture: classes.avatar }}
          user={viewer}
          withName={false}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        placement="bottom-start"
        className={classes.popper}
      >
        {({ TransitionProps }): JSX.Element => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: 'top' }}
          >
            <div className={classes.optionContainer}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItemLink
                    className={classes.option}
                    onClick={handleClose}
                    href="/user/[params]"
                    as={`/user/${viewer.id}`}
                  >
                    Profile
                  </MenuItemLink>
                  <MenuItemLink
                    className={classes.option}
                    onClick={handleClose}
                    href="/settings"
                  >
                    Settings
                  </MenuItemLink>
                  <MenuItem
                    className={clsx(classes.option, classes.logout)}
                    onClick={handleLogout}
                  >
                    Sign out
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </div>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default UserCard;
