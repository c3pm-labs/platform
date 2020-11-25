import { objectType } from '@nexus/schema';

export const Viewer = objectType({
  name: 'Viewer',
  definition(t) {
    t.model('User').id();
    t.model('User').email();
    t.model('User').username();
  },
});
