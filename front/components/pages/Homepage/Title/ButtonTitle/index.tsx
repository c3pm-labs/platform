import {
  makeStyles, Typography, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import ButtonLink from 'components/ButtonLink';
import TextLink from 'components/TextLink';

import { Link as ScrollLink } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  containerButton: {
    display: 'flex',
    flexDirection: 'column',
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
  getStarted: {
    minWidth: '15em',
  },
  learnMore: {
    color: theme.palette.secondary.main,
  }
}));

function ButtonTitle(): JSX.Element {
  const classes = useStyles();

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
            Get started
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
            Learn more
          </Typography>
        </TextLink>
      </ScrollLink>
    </div>
  );
}

export default ButtonTitle;
