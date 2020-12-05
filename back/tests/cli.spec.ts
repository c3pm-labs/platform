import { gql } from 'apollo-server-express';
import faker from 'faker';

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
  });
});
