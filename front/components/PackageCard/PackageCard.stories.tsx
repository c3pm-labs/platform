import { Meta } from '@storybook/react';

import PackageCard from '.';

const versions = [
  {
    version: '1.2.3', publishedAt: '10/12/20', description: '', readme: '',
  },
  {
    version: '1.1.4', publishedAt: '10/13/20', description: '', readme: '',
  },
  {
    version: '1.0.0', publishedAt: '10/14/20', description: '', readme: '',
  },
  {
    version: '0.9.8', publishedAt: '10/28/20', description: '', readme: '',
  },
  {
    version: '2.0.6', publishedAt: '10/02/20', description: '', readme: '',
  },
  {
    version: '0.3.0', publishedAt: '10/22/20', description: '', readme: '',
  },
];

export default {
  title: 'PackageCard',
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'boost',
    },
    author: {
      name: 'author',
      control: { type: 'text' },
      defaultValue: 'Itagiba A.',
    },
    email: {
      name: 'author',
      control: { type: 'text' },
      defaultValue: 'chloe.bourbion@gmail.com',
    },
  },
} as Meta;

interface ArgType {
  name: string;
  author: string;
  email: string;
}

export const Basic = (args: ArgType): JSX.Element => {
  const { name, author, email } = args;
  return (
    <PackageCard packageData={{
      name,
      author: { name: author, id: '', email },
      versions,
      latest: versions[0],
    }}
    />
  );
};
