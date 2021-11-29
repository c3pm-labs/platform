import { useContext } from 'react';
import { Hidden, Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import RightNav from 'components/Layout/Header/RightNav';
import Logo from 'components/Logo';
import ContactForm from 'components/forms/ContactForm';
import { ModalContext } from 'utils/contexts/modalContext';

import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    padding: `0px ${theme.spacing(3)}px`,
    '& > a': { textDecoration: 'none' },
  },
  search: {
    maxWidth: 480,
    flex: 1,
    margin: `0 ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
  text: {
    textDecoration: 'none',
    fontSize: 14,
    color: theme.palette.grey[700],
    textAlign: 'left',
    margin: '0px 4px',
  },
  contactText: {
    fontSize: 14,
    color: theme.palette.grey[700],
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Header(): JSX.Element {
  const classes = useStyles();
  const elevationTrigger = useScrollTrigger({ threshold: 10, disableHysteresis: true });
  const { modalDispatch } = useContext(ModalContext);

  return (
    <AppBar
      elevation={elevationTrigger ? 3 : 0}
      className={classes.appBar}
      position="sticky"
      color="default"
    >
      <div className={classes.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.c3pm.io"
        >
          <Typography className={classes.text}>Docs</Typography>
        </a>
        <Typography className={classes.text}>•</Typography>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/c3pm-labs/"
        >
          <Typography className={classes.text}>Github</Typography>
        </a>
        <Typography className={classes.text}>•</Typography>
        <Typography
          className={classes.contactText}
          onClick={() => {
            modalDispatch({ open: true, children: <ContactForm /> });
          }}
        >
          Contact us
        </Typography>
      </div>
      <Toolbar className={classes.container}>
        <Hidden implementation="css" smUp>
          <Logo type="mini" />
        </Hidden>
        <Hidden implementation="css" xsDown>
          <Logo type="classic" size="sm" />
        </Hidden>
        <SearchBar
          dataTestId="search-header"
          className={classes.search}
        />
        <RightNav />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
