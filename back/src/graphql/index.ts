import { PrismaClient } from 'nexus-plugin-prisma/client';
import {
  ApolloServer, AuthenticationError, ForbiddenError, UserInputError,
} from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { Router } from 'express';

import * as errors from '../utils/errors';
import { SessionManager } from '../SessionManager';
import { Context } from '../context';

import { schema } from './schema';
import LoggingExtension from './LoggingExtension';

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

  return new Error('Internal server error');
}

export function getGraphqlMiddleware(db: PrismaClient): Router {
  const apolloServer = new ApolloServer({
    schema,
    extensions: [(): LoggingExtension => new LoggingExtension()],
    context: ({ req }): Context => {
      const session = new SessionManager(db, req);
      return ({
        db,
        session,
      });
    },
    formatError,
  });
  return apolloServer.getMiddleware({ cors: false });
}
