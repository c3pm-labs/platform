import React from 'react';
import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import Image from 'next/image';

import Button from '../Button';

const useStyles = makeStyles(() => createStyles({
  container: {
    backgroundColor: '#5865F2',
    color: 'white',
    borderRadius: '100%',
    minWidth: '55px',
    minHeight: '55px',
    position: 'fixed',
    bottom: '30px',
    right: '30px',
  },
}));

export interface DiscordButtonProps {
  className?: string;
  disabled?: boolean;
  href?: string;
}

const DiscordButton = React.forwardRef((props: DiscordButtonProps): JSX.Element => {
  const {
    href = 'https://discord.gg/CU8Qbex3wP',
  } = props;
  const classes = useStyles();

  return (
    <Button href={href} className={classes.container}>
      <Image width="32px" height="32px" src="/assets/discordLogo.svg" alt="discord" />
    </Button>
  );
});

export default DiscordButton;
