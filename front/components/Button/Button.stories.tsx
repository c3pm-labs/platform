import { Meta } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const basic = (args: ButtonProps): JSX.Element => (<Button {...args}>Hello</Button>);
