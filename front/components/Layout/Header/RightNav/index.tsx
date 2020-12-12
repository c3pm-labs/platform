import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useViewer } from 'hooks/auth';

import ButtonLink from 'components/ButtonLink';

import MobileMenu from './MobileMenu';
import UserCard from './UserCard';

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    padding: 0,
  },
  marginRight: {
    marginRight: theme.spacing(3),
  },
}));

function RightNav(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const viewer = useViewer();
  const classes = useStyles();

  if (isMobile) {
    return (
      <MobileMenu />
    );
  }

  return (
    <>
      { viewer ? (<UserCard />) : (
        <div>
          <ButtonLink href="/login" className={classes.marginRight} variant="outlined">
            Sign in
          </ButtonLink>
          <ButtonLink href="/register" variant="contained">
            Sign up
          </ButtonLink>
        </div>
      )}
    </>
  );
}

export default RightNav;
