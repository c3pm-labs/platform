import { AddressInfo } from 'net';

import { createHttpLink } from 'apollo-link-http';
import { DocumentNode, execute, toPromise } from 'apollo-link';
import fetch from 'isomorphic-fetch';
import fetchCookie from 'fetch-cookie';
<<<<<<< HEAD
import { PrismaClient } from '@prisma/client';
import axios, { AxiosInstance } from 'axios';
import { SetupServerApi } from 'msw/node';
=======
>>>>>>> b5b87471c41ac71f8a7a6836e9bdc5d5e3400e1c

import Server from '../../src/Server';
import { setupMockServer } from '../mocks/server';

interface TestServer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  graphql: (query: DocumentNode, variables?: unknown) => Promise<any>;
  stop: () => void;
  baseURL: string;
  mockServer: SetupServerApi,
}

export interface TestContext {
  server: TestServer;
}

function startTestServer(): TestServer {
  const server = new Server();
  const httpServer = server.listen(0);
  const baseURL = `http://localhost:${(httpServer.address() as AddressInfo).port}`;
  const mockServer = setupMockServer();

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
    baseURL,
    mockServer,
  };
}

export function createTestContext(): TestContext {
  const ctx: TestContext = { server: {} as TestServer };

  beforeAll(() => {
    const testServer = startTestServer();

    ctx.server.mockServer = testServer.mockServer;
    ctx.server.mockServer.listen();
    ctx.server.graphql = testServer.graphql;
    ctx.server.stop = testServer.stop;
    ctx.server.baseURL = testServer.baseURL;
  });

  afterEach(() => ctx.server.mockServer.resetHandlers());

  afterAll(async () => {
    ctx.server.mockServer.close();
    await ctx.server.stop();
  });

  return ctx;
}

export function createAxiosInstance(ctx: TestContext): AxiosInstance {
  return axios.create({ baseURL: ctx.server.baseURL });
}
