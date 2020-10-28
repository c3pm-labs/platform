import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    minHeight: '6em',
    backgroundColor: theme.palette.grey[100],
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: theme.spacing(2),
    '& span': {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: theme.spacing(1),
    },
  },
  text: {
    textDecoration: 'none',
    fontSize: 14,
    color: theme.palette.grey[500],
    marginBottom: 3,
  },
}));

function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <span>General Information</span>
        <a
          href="https://docs.c3pm.io"
          className={classes.text}
        >
          <Typography className={classes.text}>Docs</Typography>
        </a>
        <a
          href="https://github.com/gabrielcolson/c3pm/"
          className={classes.text}
        >
          <Typography className={classes.text}>Github</Typography>
        </a>
        <a
          href="https://github.com/gabrielcolson/c3pm/releases"
          className={classes.text}
        >
          <Typography className={classes.text}>Releases</Typography>
        </a>
      </div>
      <div className={classes.textContainer}>
        <span>Contact us</span>
        <a
          href="mailto:contact@c3pm.io"
          className={classes.text}
        >
          <Typography className={classes.text}>
            contact@c3pm.io
          </Typography>
        </a>
        <a
          href="https://github.com/gabrielcolson/c3pm/issues/new/choose"
          className={classes.text}
        >
          <Typography className={classes.text}>Issues</Typography>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link href="/team"><a className={classes.text}>Team</a></Link>
      </div>
    </div>
  );
}

export default Footer;
