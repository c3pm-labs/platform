import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Button from '../Button';
import { createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) => createStyles({
  default: {
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

const DiscordButton = React.forwardRef((props: DiscordButtonProps, ref: React.Ref<HTMLButtonElement>): JSX.Element => {
  const { 
    href = "https://discord.gg/CU8Qbex3wP"
  } = props;
  const classes = useStyles();

  return (
    <Button href = {href} className = {classes.default}>
      <Image width={'32px'} height={'32px'} src="/assets/discordLogo.svg" alt="discord" />
    </Button>
  );
});

export default DiscordButton;
