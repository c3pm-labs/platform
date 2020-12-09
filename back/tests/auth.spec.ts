/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'apollo-server-express';
import faker from 'faker';

import { createTestContext } from './__helpers__/context';

describe('auth', () => {
  const ctx = createTestContext();
  const registerMutation = async (user: { email: string; password: string; username: string }): Promise<any> => ctx.server.graphql(gql`
        mutation Register($email: String!, $username: String!, $password: String!) {
            register(email: $email, username: $username, password: $password) {
                username
                email
            }
        }
    `, user);
  const loginMutation = async (user: { login: string; password: string }): Promise<any> => ctx.server.graphql(gql`
        mutation Login($login: String!, $password: String!) {
            login(login: $login, password: $password) {
                username
                email
            }
        }
    `, user);
  const logoutMutation = async (): Promise<any> => ctx.server.graphql(gql`
        mutation Logout {
            logout {
                username
                email
            }
        }
  `);

  const getGraphqlErrorsCodes = (errors): string[] => errors.map((e) => e?.extensions?.code);
  const userData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
  };

  test('auth flow', async () => {
    const { data: { register } } = await registerMutation(userData);
    expect(register).toEqual({ email: userData.email, username: userData.username });

    const { data: { logout } } = await logoutMutation();
    expect(logout).toEqual({ email: userData.email, username: userData.username });

    const userWithEmail = { login: userData.email, password: userData.password };
    const { data: { login: loginWithEmail } } = await loginMutation(userWithEmail);
    expect(loginWithEmail).toEqual({ email: userData.email, username: userData.username });

    await logoutMutation();

    const userWithUsername = { login: userData.username, password: userData.password };
    const { data: { login: loginWithUsername } } = await loginMutation(userWithUsername);
    expect(loginWithUsername).toEqual({ email: userData.email, username: userData.username });
  });

  test('should throw an error because user is already logged in', async () => {
    const user = { login: userData.username, password: userData.password };
    const { errors } = await loginMutation(user);
    const codes = getGraphqlErrorsCodes(errors);
    expect(codes).toContain('FORBIDDEN');
  });

  test('should throw an error because the password is invalid', async () => {
    const user = { login: userData.email, password: faker.internet.password() };

    await logoutMutation();
    const { errors } = await loginMutation(user);
    const codes = getGraphqlErrorsCodes(errors);
    expect(codes).toContain('UNAUTHENTICATED');
  });

  test('should throw an error because the user does not exist', async () => {
    const user = { login: faker.internet.userName(), password: faker.internet.password() };
    const { errors } = await loginMutation(user);
    const codes = getGraphqlErrorsCodes(errors);
    expect(codes).toContain('UNAUTHENTICATED');
  });

  test('should throw an error because the user is not logged in', async () => {
    const { errors } = await logoutMutation();
    const codes = getGraphqlErrorsCodes(errors);
    expect(codes).toContain('UNAUTHENTICATED');
  });

  test('should throw an error because email is already used', async () => {
    const user = { ...userData, username: 'toto' };
    const { errors } = await registerMutation(user);
    const codes = getGraphqlErrorsCodes(errors);
    expect(codes).toContain('FORBIDDEN');
  });

  test('should throw an error because username is already used', async () => {
    const user = { ...userData, email: 'toto@gmail.com' };
    const { errors } = await registerMutation(user);
    const codes = getGraphqlErrorsCodes(errors);
    expect(codes).toContain('FORBIDDEN');
  });
});
