import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import { Element } from 'react-scroll';
import Image from 'next/image';

import InfoCard from './InfoCard';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px 0px`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95em',
      flexDirection: 'column',
      padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    },
  },
  demoGif: {
    maxWidth: '700px',
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: theme.spacing(2),
      maxWidth: 500,
    },
    borderRadius: theme.shape.borderRadius,
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    maxWidth: 450,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    marginBottom: theme.spacing(8),
  },
  startLearningButton: {
    textAlign: 'center',
    fontWeight: 500,
    color: 'white',
    fontSize: '1.2em',
  },
  title: {
    textAlign: 'center',
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: '2.1em',
  },
}));

function Demo(): JSX.Element {
  const classes = useStyles();

  return (
    <Element name="whyc3pm">
      <div id="whyc3pm">
        <Typography className={classes.title}>
          Why c3pm ?
        </Typography>
        <div className={classes.container}>
          <div className={classes.demoGif}>
            <Image width={861} height={536} src="/assets/demo.gif" alt="demogif" />
          </div>
          <div className={classes.infoCard}>
            <InfoCard
              title="C++ made easy"
              description="With c3pm, start your cross-platform project with 0 configuration. It has never been so simple!"
              textLink="Learn more about c3pm"
              link="https://docs.c3pm.io/docs/about"
            />
            <InfoCard
              title="Trivial Dependency management"
              description="c3pm will manage the dependencies for you! No more hours spent installing a simple library: one command and you’re good to go!"
              textLink="View full documentation"
              link="https://docs.c3pm.io/"
            />
            <InfoCard
              title="Package sharing"
              description="c3pm is, before all, a package manager. You can share a reusable piece of code with the entire community!"
              textLink="Browse packages"
              link="/search"
            />
          </div>
        </div>
        <a className={classes.button} href="https://docs.c3pm.io/docs/getting_started/install" target="_blank" rel="noopener noreferrer">
          <Button
            color="primary"
            variant="contained"
            size="large"
          >
            <Typography className={classes.startLearningButton}>
              Install c3pm
            </Typography>
          </Button>
        </a>

      </div>
    </Element>
  );
}

export default Demo;
