import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'next-i18next';

const useStyles = makeStyles((theme) => ({
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
        <Button
          variant="outlined"
          size="large"
          className={classes.overRideColorLearnMoreButton}
        >
          <Typography
            className={clsx(
              classes.leanMoreButton,
              classes.defaultStyleText,
              classes.defaultStyleButton,
            )}
          >
            {t('buttons.learn')}
          </Typography>
        </Button>
      </ScrollLink>
    </div>
  );
}

export default ButtonTitle;
