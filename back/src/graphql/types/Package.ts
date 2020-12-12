import { objectType } from '@nexus/schema';

import { PackageService } from '../../services/PackageService';

export const Versions = objectType({
  name: 'Version',
  definition(t) {
    t.model.description();
    t.model.license();
    t.model.package();
    t.model.readme();
    t.model.publishedAt();
    t.model.version();
  },
});

export const Package = objectType({
  name: 'Package',
  definition(t) {
    t.model.author();
    t.model.name();
    t.model.versions();
    t.field('latest', {
      type: 'Version',
      resolve: async (pkg, _args, ctx) => {
        const packageService = new PackageService(ctx);
        return packageService.getLatestVersion(pkg.name);
      },
    });
  },
});
