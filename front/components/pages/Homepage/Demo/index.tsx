import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import { Element } from 'react-scroll';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('common');

  return (
    <Element name="whyc3pm">
      <div id="whyc3pm">
        <Typography className={classes.title}>
          {t('home.why')}
        </Typography>
        <div className={classes.container}>
          <div className={classes.demoGif}>
            <Image width={861} height={536} src="/assets/demo.gif" alt="demogif" />
          </div>
          <div className={classes.infoCard}>
            <InfoCard
              title={t('home.easy')}
              description={t('home.easyDescription')}
              textLink={t('home.easyLink')}
              link="https://docs.c3pm.io/docs/about"
            />
            <InfoCard
              title={t('home.trivial')}
              description={t('home.trivialDescription')}
              textLink={t('home.trivialLink')}
              link="https://docs.c3pm.io/"
            />
            <InfoCard
              title={t('home.sharing')}
              description={t('home.sharingDescription')}
              textLink={t('home.sharingLink')}
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
              {t('buttons.install')}
            </Typography>
          </Button>
        </a>

      </div>
    </Element>
  );
}

export default Demo;
