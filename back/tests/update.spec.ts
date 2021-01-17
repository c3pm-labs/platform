/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'apollo-server-express';
import faker from 'faker';

import { createTestContext } from './__helpers__/context';

describe('update user', () => {
  const ctx = createTestContext();
  const getGraphqlErrorsCodes = (errors): string[] => errors.map((e) => e?.extensions?.code);
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
  const updateMutation = async (user: { id: string, username?: string; email?: string, description?: string }): Promise<any> => ctx.server.graphql(gql`
      mutation Update($id: String!, $username: String, $email: String, $description: String) {
          update(id: $id, username: $username, email: $email, description: $description) {
              email,
              username,
              description,
          }
      }
  `, user);
  let userId = '';

  test('update user flow', async () => {
    await registerMutation(userData);

    const { data: { viewer } } = await viewerQuery();
    expect(viewer).toEqual({
      id: expect.any(String),
      email: userData.email,
      username: userData.username,
    });
    userId = viewer.id;

    const updateData = { id: viewer.id, description: 'what a nice description', email: faker.internet.email() };
    await updateMutation(updateData);
    userData.email = updateData.email;

    const { data: { user } } = await userQuery({ id: viewer.id });
    expect(user).toEqual({
      id: viewer.id,
      username: viewer.username,
      email: updateData.email,
      description: updateData.description,
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
