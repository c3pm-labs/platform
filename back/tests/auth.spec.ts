/* eslint-disable @typescript-eslint/no-explicit-any */
import exp from 'constants';

import { gql } from 'apollo-server-express';
import faker from 'faker';

import { createTestContext } from './__helpers__/context';

const ctx = createTestContext();

describe('auth', () => {
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
  const updateMutation = async (user: { id: string, username?: string; email?: string, description?: string }): Promise<any> => ctx.server.graphql(gql`
      mutation Update($id: String!, $username: String, $email: String, $description: String) {
          update(id: $id, username: $username, email: $email, description: $description) {
              email,
              username,
              description,
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
  const viewerQuery = async (): Promise<any> => ctx.server.graphql(gql`
      query {
          viewer {
              id
              email
              username
          }
      }
  `);
  const userQuery = async (user: { id: string }): Promise<any> => ctx.server.graphql(gql`
      query user($id: String) {
          user(id: $id) {
              id,
              username,
              email,
              description,
          }
      }
  `, user);
  const getGraphqlErrorsCodes = (errors): string[] => errors.map((e) => e?.extensions?.code);
  const userData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
  };
  let userId = '';

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

  test('update user flow', async () => {
    const { data: { viewer } } = await viewerQuery();
    expect(viewer).toEqual({
      id: expect.any(String),
      email: userData.email,
      username: userData.username,
    });

    const updateData = { id: viewer.id, description: 'what a nice description', email: faker.internet.email() };
    await updateMutation(updateData);
    userData.email = updateData.email;
    userId = viewer.id;

    const { data: { user } } = await userQuery({ id: viewer.id });
    expect(user).toEqual({
      id: viewer.id,
      username: viewer.username,
      email: updateData.email,
      description: updateData.description,
    });
  });

  describe('login edge case', () => {
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
  });

  describe('logout edge case', () => {
    test('should throw an error because the user is not logged in', async () => {
      const { errors } = await logoutMutation();
      const codes = getGraphqlErrorsCodes(errors);
      expect(codes).toContain('UNAUTHENTICATED');
    });
  });

  describe('register edge case', () => {
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

  describe('update edge case', () => {
    test('should throw an error because no argument is passed', async () => {
      const { errors } = await updateMutation({ id: userId });
      const codes = getGraphqlErrorsCodes(errors);
      expect(codes).toContain('BAD_USER_INPUT');
    });
  });
});
