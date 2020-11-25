import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    minWidth: '100vw',
    width: '100vw',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.85em',
    },
    paddingBottom: `${theme.spacing(5)}px`,
    paddingLeft: `${theme.spacing(2)}px`,
    paddingRight: `${theme.spacing(2)}px`,
  },
  defaultStyleText: {
    textAlign: 'center',
    fontWeight: 500,
  },
  styleQuestion: {
    color: theme.palette.text.primary,
    fontSize: '2.5em',
  },
  minSpacingFantom: {
    minHeight: '3em',
    minWidth: '1.5em',
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
  containerLines: {
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

function AnnexInfo(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.containerLines}>
        <Typography className={clsx(classes.styleQuestion, classes.defaultStyleText)}>
          Install c3pm today.
        </Typography>
        <Typography className={clsx(classes.subBaseline, classes.defaultStyleText)}>
          It’s free and open source.
        </Typography>
        <div className={classes.minSpacingFantom} />
        <Link href="/register">
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
        </Link>
      </div>
    </div>
  );
}

export default AnnexInfo;
