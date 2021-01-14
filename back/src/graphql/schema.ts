import { join } from 'path';

import { nexusPrisma } from 'nexus-plugin-prisma';
import { makeSchema } from 'nexus';

import * as types from './allTypes';

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({ prismaClient: (ctx) => ctx.db })],
  nonNullDefaults: {
    output: true,
    input: true,
  },
  outputs: {
    schema: `${__dirname}/../../schema.graphql`,
    typegen: `${__dirname}/generated/nexus.ts`,
  },
  contextType: {
    module: join(__dirname, '..', 'context.ts'),
    alias: 'ContextModule',
    export: 'Context',
  },
});
