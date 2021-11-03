import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'next-i18next';

import TextLink from 'components/TextLink';

const useStyles = makeStyles((theme) => ({
  containerButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  getStartedButton: {
    color: 'white',
  },
  leanMoreButton: {
    color: theme.palette.grey[700],
  },
  overRideColorLearnMoreButton: {
    color: theme.palette.grey[700],
    borderWidth: '0.1em',
  },
  defaultStyleText: {
    textAlign: 'center',
    fontWeight: 500,
  },
  defaultStyleButton: {
    fontSize: '1.2em',
  },
  minSpacingFantom: {
    minHeight: '1.5em',
    minWidth: '1.5em',
  },
  getStarted: {
    minWidth: '15em',
  },
  learnMore: {
    color: theme.palette.secondary.main,
  },
}));

function ButtonTitle(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={classes.containerButton}>
      <Link href="/register">
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.getStarted}
        >
          <Typography
            className={clsx(
              classes.getStartedButton,
              classes.defaultStyleText,
              classes.defaultStyleButton,
            )}
          >
            {t('buttons.getStarted')}
          </Typography>
        </Button>
      </Link>
      <div className={classes.minSpacingFantom} />
      <ScrollLink
        smooth
        offset={-80}
        to="whyc3pm"
        spy
        hashSpy
      >
        <TextLink className={classes.learnMore} href="">
          <Typography>
            {t('buttons.learn')}
          </Typography>
        </TextLink>
      </ScrollLink>
    </div>
  );
}

export default ButtonTitle;
