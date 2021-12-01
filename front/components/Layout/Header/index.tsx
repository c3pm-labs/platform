import { Hidden } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import RightNav from 'components/Layout/Header/RightNav';
import Logo from 'components/Logo';

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
  search: {
    maxWidth: 480,
    flex: 1,
    margin: `0 ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
}));

function Header(): JSX.Element {
  const classes = useStyles();
  const elevationTrigger = useScrollTrigger({ threshold: 10, disableHysteresis: true });

  return (
    <AppBar
      elevation={elevationTrigger ? 3 : 0}
      className={classes.appBar}
      position="sticky"
      color="default"
    >
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
