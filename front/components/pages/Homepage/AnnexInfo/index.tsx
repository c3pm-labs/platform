import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.85em',
    },
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    '& > a': {
      textDecoration: 'none',
    },

  },
  defaultStyleText: {
    textAlign: 'center',
    fontWeight: 500,
  },
  styleQuestion: {
    color: theme.palette.text.primary,
    fontSize: '2.5em',
  },
  getStartedButton: {
    color: 'white',
    fontSize: '1.2em',
  },
  subBaseline: {
    color: theme.palette.grey[700],
    fontSize: '1.7em',
  },
  containerKeepInTouchComponent: {
    width: '80vw',
  },
}));

function AnnexInfo(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={clsx(classes.styleQuestion, classes.defaultStyleText)}>
        Install c3pm today.
      </Typography>
      <a href="https://docs.c3pm.io/docs/getting_started/install">
        <Button
          color="primary"
          variant="contained"
          size="large"
        >
          <Typography
            className={clsx(
              classes.getStartedButton,
              classes.defaultStyleText,
            )}
          >
            Get started
          </Typography>
        </Button>
      </a>
    </div>
  );
}

export default AnnexInfo;
