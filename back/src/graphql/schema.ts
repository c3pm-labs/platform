import { join } from 'path';

import { makeSchema } from 'nexus';

import * as types from './allTypes';

export const schema = makeSchema({
  types,
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
