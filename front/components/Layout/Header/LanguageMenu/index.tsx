/* eslint-disable react/display-name */
import { useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '&:hover': {
        backgroundColor: 'none !important',
      },
    },
    dense: {
      color: 'black',
      backgroundColor: 'transparent !important',
    },
    padding: {
      padding: 0,
    },
    button: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '15px',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        textColor: 'white',
      },
    },
    paper: {
      top: '60px !important',
    },
  }),
);

type LanguageMenuProps = {
  className?: string;
};

const LanguageMenu = ({ className }: LanguageMenuProps): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();
  const { asPath } = useRouter();

  const getCurrentLanguage = (): { index: number; language: string } => {
    if (router.locale === 'fr') {
      return { index: 0, language: 'Français' };
    }

    return { index: 1, language: 'English' };
  };

  const currentLanguage = getCurrentLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(currentLanguage.index);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ): void => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <List className={classes.padding} component="nav">
        <ListItem
          aria-haspopup="true"
          className={classes.button}
          button
          onClick={handleClickListItem}
        >
          <ListItemText primary={currentLanguage.language} />
        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        className={classes.paper}
        elevation={3}
        id="lock-menu"
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        <Link as={asPath} href={router.pathname} locale="fr" passHref>
          <MenuItem
            className={classes.dense}
            disabled={selectedIndex === 0}
            selected={selectedIndex === 0}
            onClick={(event) => handleMenuItemClick(event, 0)}
          >
            Français
          </MenuItem>
        </Link>
        <Link as={asPath} href={router.pathname} locale="en" passHref>
          <MenuItem
            className={classes.dense}
            disabled={selectedIndex === 1}
            selected={selectedIndex === 1}
            onClick={(event) => handleMenuItemClick(event, 1)}
          >
            English
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default LanguageMenu;