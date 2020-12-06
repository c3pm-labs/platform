import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
};

export const Basic = (args: LogoProps): JSX.Element => (<Logo {...args} />);
