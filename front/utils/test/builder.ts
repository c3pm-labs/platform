import { build, fake, sequence } from '@jackfranklin/test-data-bot';
import { User, Version, Viewer } from 'types';

const userBuilder = build<User>({
  fields: {
    id: sequence(),
    username: fake((f) => f.internet.userName()),
    email: fake((f) => f.internet.email()),
    description: fake((f) => f.lorem.text()),
    packages: [],
  },
});

const viewerBuilder = (user: User) => (
  build<Viewer>({ fields: user })()
);

const optionsBuilder = build<Array<{ label: string; value: string }>>({
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

const versionBuilder = (version: string, publishedAt: string) => (
  build<Version>({
    fields: {
      version,
      publishedAt,
      description: fake((f) => f.lorem.text()),
      readme: fake((f) => f.lorem.text()),
      package: [],
    },
  })()
);

export const fakeUser = userBuilder();
export const fakeViewer = viewerBuilder(fakeUser);
export const fakeOptions = optionsBuilder();
export const versionOutdated = versionBuilder('0.1.5', '10:04:1999');
export const versionLast = versionBuilder('0.2.5', '18:07:2000');
