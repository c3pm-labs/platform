import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { makeSchema } from '@nexus/schema';

import * as types from './types';

export const schema = makeSchema({
  types,
  plugins: [nexusSchemaPrisma({ prismaClient: (ctx) => ctx.db })],
  nonNullDefaults: {
    output: true,
    input: true,
  },
  outputs: {
    schema: `${__dirname}/../../schema.graphql`,
    typegen: `${__dirname}/generated/nexus.ts`,
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
  },
});
