import { build, fake, sequence } from '@jackfranklin/test-data-bot';
import { User, Version, Viewer } from 'types';

export const userBuilder = build<User>({
  fields: {
    id: sequence(),
    username: fake((f) => f.internet.userName()),
    email: fake((f) => f.internet.email()),
    description: fake((f) => f.lorem.text()),
    packages: [],
  },
});

export const viewerBuilder = (user: User): Viewer => (
  build<Viewer>({ fields: user })()
);

export const optionsBuilder = build<Array<{ label: string; value: string }>>({
  fields: [
    { label: '', value: fake((f) => f.lorem.word()) },
    { label: '', value: fake((f) => f.lorem.word()) },
    { label: '', value: fake((f) => f.lorem.word()) },
  ],
  postBuild: (options) => [
    { label: options[0].value, value: options[0].value },
    { label: options[1].value, value: options[1].value },
    { label: options[2].value, value: options[2].value },
  ],
});

export const versionBuilder = (version: string, publishedAt: string): Version => (
  build<Version>({
    fields: {
      tags: [],
      version,
      publishedAt,
      description: fake((f) => f.lorem.text()),
      readme: fake((f) => f.lorem.text()),
      package: [],
    },
  })()
);
