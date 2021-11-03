import { Meta } from '@storybook/react';

import DiscordButton, { DiscordButtonProps } from '.';

export default {
  title: 'DiscordButton',
  component: DiscordButton,
} as Meta;

export const basic = (args: DiscordButtonProps): JSX.Element => (<DiscordButton {...args} />);
