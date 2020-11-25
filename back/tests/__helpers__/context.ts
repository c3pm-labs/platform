import { AddressInfo } from 'net';

import { createHttpLink } from 'apollo-link-http';
import { DocumentNode, execute, toPromise } from 'apollo-link';
import fetch from 'isomorphic-fetch';
import fetchCookie from 'fetch-cookie';
import { PrismaClient } from 'nexus-plugin-prisma/client';

import Server from '../../src/Server';

interface TestServer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  graphql: (query: DocumentNode, variables?: unknown) => Promise<any>;
  stop: () => void;
}

export interface TestContext {
  server: TestServer;
}

function startTestServer(): TestServer {
  const server = new Server(new PrismaClient());
  const httpServer = server.listen(0);

  const { port } = httpServer.address() as AddressInfo;

  const link = createHttpLink({
    uri: `http://localhost:${port}/graphql`,
    fetch: fetchCookie(fetch) as typeof fetch,
    credentials: 'include',
  });

  const graphql = (query, variables = {}): Promise<unknown> => toPromise(execute(link, {
    query,
    variables,
  }));

  const stop = async (): Promise<void> => server.stop();

  return {
    stop,
    graphql,
  };
}

export function createTestContext(): TestContext {
  const ctx: TestContext = { server: {} as TestServer };

  beforeEach(() => {
    const testServer = startTestServer();

    ctx.server.graphql = testServer.graphql;
    ctx.server.stop = testServer.stop;
  });

  afterEach(async () => {
    await ctx.server.stop();
  });

  return ctx;
}
