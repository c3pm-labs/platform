import { Typography } from '@material-ui/core';
import { Meta } from '@storybook/react';

import TextLink from '.';

export default {
  title: 'TextLink',
} as Meta;

export const Basic = (): JSX.Element => (
  <Typography>
    <TextLink href="/home">Click me</TextLink>
  </Typography>
);
