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

const useStyles = makeStyles((theme) => createStyles({
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
    padding: 2,
  },
  margin: {
    marginRight: theme.spacing(2),
  },
  button: {
    height: '2.2rem',
    border: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '25px',
    color: 'white',
    '& span, & svg': {
      fontSize: '14px',
    },
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.secondary.main,
    },
  },
  paper: {
    top: '50px !important',
  },
}));

const LanguageMenu = (): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();
  const { asPath } = useRouter();

  const getCurrentLanguage = (): { index: number; language: string } => {
    if (router.locale === 'fr') {
      return { index: 0, language: 'FR' };
    }

    return { index: 1, language: 'EN' };
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
    <>
      <List className={classes.margin} component="nav">
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
    </>
  );
};

export default LanguageMenu;
