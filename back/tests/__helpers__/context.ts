import { AddressInfo } from 'net';

import { createHttpLink } from 'apollo-link-http';
import { DocumentNode, execute, toPromise } from 'apollo-link';
import fetch from 'isomorphic-fetch';
import fetchCookie from 'fetch-cookie';
import { PrismaClient } from '@prisma/client';
import axios, { AxiosInstance } from 'axios';

import Server from '../../src/Server';

interface TestServer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  graphql: (query: DocumentNode, variables?: unknown) => Promise<any>;
  stop: () => void;
  baseURL: string;
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
  const baseURL = `http://localhost:${(httpServer.address() as AddressInfo).port}`;

  return {
    stop,
    graphql,
    baseURL,
  };
}

export function createTestContext(): TestContext {
  const ctx: TestContext = { server: {} as TestServer };

  beforeAll(() => {
    const testServer = startTestServer();

    ctx.server.graphql = testServer.graphql;
    ctx.server.stop = testServer.stop;
    ctx.server.baseURL = testServer.baseURL;
  });

  afterAll(async () => {
    await ctx.server.stop();
  });

  return ctx;
}

export function createAxiosInstance(ctx: TestContext): AxiosInstance {
  return axios.create({ baseURL: ctx.server.baseURL });
}
