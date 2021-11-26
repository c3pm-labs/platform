import {
  ApolloServer, AuthenticationError, ForbiddenError, UserInputError,
} from 'apollo-server-express';
import { GraphQLError } from 'graphql';

import * as errors from '../utils/errors';
import { SessionManager } from '../SessionManager';
import { Context } from '../context';
import db from '../db';

import { schema } from './schema';

function formatError(err: GraphQLError): Error {
  const { originalError } = err;

  if (originalError instanceof errors.AuthenticationError) {
    return new AuthenticationError(originalError.message);
  }
  if (originalError instanceof errors.ForbiddenError) {
    return new ForbiddenError(originalError.message);
  }
  if (originalError instanceof errors.UserInputError) {
    return new UserInputError(originalError.message);
  }

  console.error('Internal server error:', originalError);
  return new Error('Internal server error');
}

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }): Context => {
    const session = new SessionManager(req);
    return ({
      db,
      session,
    });
  },
  formatError,
});

const graphqlMiddleware = apolloServer.getMiddleware({ cors: false });

export default graphqlMiddleware;
