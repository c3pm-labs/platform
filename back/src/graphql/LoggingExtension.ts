import { DocumentNode, GraphQLError, print } from 'graphql';
import { GraphQLExtension } from 'apollo-server-express';

import logger from '../utils/logger';

interface RequestDidStartParams {
  queryString?: string;
  parsedQuery?: DocumentNode;
}

class LoggingExtension extends GraphQLExtension<never> {
  // eslint-disable-next-line class-methods-use-this
  requestDidStart({ queryString, parsedQuery }: RequestDidStartParams): void {
    const query = parsedQuery ? print(parsedQuery) : queryString;
    logger.info(query);
  }

  // eslint-disable-next-line class-methods-use-this
  didEncounterErrors(errors: ReadonlyArray<GraphQLError>): void {
    logger.error(errors);
  }
}

export default LoggingExtension;
