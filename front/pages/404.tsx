import { makeStyles } from '@material-ui/core/styles';
import { Typography, Hidden } from '@material-ui/core';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Layout from 'components/Layout';
import Head from 'components/Head';

const useStyles = makeStyles((theme) => ({
  Container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotFoundSvg: {
    [theme.breakpoints.down('sm')]: {
      width: 500,
    },
    [theme.breakpoints.down('xs')]: {
      width: 280,
    },
    width: 650,
  },
  buttonLink: {
    borderWidth: '0px',
    backgroundColor: 'rgba(0,0,0,0)',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    marginTop: theme.spacing(1),
  },
  LinkBackToHome: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    fontSize: '1.4em',
    fontWeight: 500,
  },
  StylePageNotFound: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '1.2em',
    fontWeight: 700,
    paddingTop: '2em',
  },
  InvisibleDiv: {
    height: '10em',
    width: '3em',
  },
}));

function PageNotFound(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout>
      <Head title="c3pm" />
      <div className={classes.Container}>
        <Hidden implementation="css" smUp>
          <div className={classes.NotFoundSvg}>
            <Image width={550} height={400} src="/assets/404mini.svg" alt="404" />
          </div>
        </Hidden>
        <Hidden implementation="css" xsDown>
          <Image className={classes.NotFoundSvg} width={650} height={200} src="/assets/404.svg" alt="404" />
        </Hidden>
        <Typography className={classes.StylePageNotFound} variant="body2">Page Not Found</Typography>
        <div className={classes.InvisibleDiv} />
        <button
          type="button"
          className={classes.buttonLink}
          onClick={() => (router.push({ pathname: '/' }))}
        >
          <Typography className={classes.LinkBackToHome}>
            Back to Home
          </Typography>
        </button>
      </div>
    </Layout>
  );
}

export default PageNotFound;
