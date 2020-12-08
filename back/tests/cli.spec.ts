import * as fs from 'fs';
import { request } from 'http';

import { gql } from 'apollo-server-express';
import faker from 'faker';
import FormData from 'form-data';

import { createAxiosInstance, createTestContext } from './__helpers__/context';

describe('auth', () => {
  const ctx = createTestContext();
  const userData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
  };
  const registerMutation = async (user: { email: string; password: string; username: string }): Promise<any> => ctx.server.graphql(gql`
      mutation Register($email: String!, $username: String!, $password: String!) {
          register(email: $email, username: $username, password: $password) {
              username
              email
          }
      }
  `, user);

  const searchQuery = async (params: { keyword: string }): Promise<any> => ctx.server.graphql(gql`
      query search($keyword: String!) {
          search(keyword: $keyword) {
              name,
              versions {
                  description,
                  license,
                  readme,
                  publishedAt,
                  version,
              }
              author {
                  username,
              }
              latest {
                  description,
                  license,
                  readme,
                  publishedAt,
                  version,
              }
          }
      }
  `);

  const createForm = (file, apiKey) => {
    const form = new FormData();
    form.append('package', file, { filename: '1.0.0' });

    const req = request(
      {
        host: 'localhost',
        port: ctx.server.port,
        path: '/v1/auth/publish',
        method: 'POST',
        headers: {
          ...form.getHeaders(),
          name: 'testLib',
          version: '1.0.0',
          authorization: apiKey,
        },
      },
      (response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      },
    );
    form.pipe(req);
    return form;
  };

  test('cli flow', async () => {
    const api = createAxiosInstance(ctx);

    // register
    await registerMutation(userData);

    // login
    const loginRes = await api.post('/v1/auth/login', {
      login: userData.email,
      password: userData.password,
    });
    expect(loginRes.data).toEqual({
      apiKey: expect.any(String),
    });

    const file = fs.createReadStream('./tests/data/my-lib.tar');
    const form = createForm(file, loginRes.data.apiKey);
  });
});
