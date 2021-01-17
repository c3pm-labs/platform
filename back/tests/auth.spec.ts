/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'apollo-server-express';
import faker from 'faker';
import sgMail from '@sendgrid/mail';
import { v4 } from 'uuid';

import { createTestContext } from './__helpers__/context';

jest.mock('uuid');
jest.mock('@sendgrid/mail');

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
  const forgotPasswordMutation = async (user: { email: string }): Promise<any> => ctx.server.graphql(gql`
      mutation forgotPassword($email: String!) {
          forgotPassword(email: $email) {
              username
              email
          }
      }
  `, user);
  const resetPassword = async (user: { token: string, password: string }): Promise<any> => ctx.server.graphql(gql`
      mutation resetPassword($token: String!, $password: String!) {
          resetPassword(token: $token, password: $password) {
              username
              email
          }
      }
  `, user);

  const getGraphqlErrorsCodes = (errors): string[] => errors.map((e) => e?.extensions?.code);
  const userData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('auth flow', async () => {
    // register
    const { data: { register } } = await registerMutation(userData);
    expect(register).toEqual({ email: userData.email, username: userData.username });

    // logout
    const { data: { logout } } = await logoutMutation();
    expect(logout).toEqual({ email: userData.email, username: userData.username });

    // login with email
    const userWithEmail = { login: userData.email, password: userData.password };
    const { data: { login: loginWithEmail } } = await loginMutation(userWithEmail);
    expect(loginWithEmail).toEqual({ email: userData.email, username: userData.username });

    await logoutMutation();

    // forgot password
    const token = 'token';
    const mockedSgMail = sgMail as jest.Mocked<typeof sgMail>;
    const mocked = v4 as jest.Mocked<typeof v4>;

    mocked.mockReturnValue('token');

    await forgotPasswordMutation({ email: userData.email });

    expect(mockedSgMail.send).toHaveBeenCalledWith({
      from: 'contact@c3pm.io',
      to: userData.email,
      subject: 'Reset Password',
      text: 'Click on the link to reset your password',
      html: `<p>Click <a href='${process.env.FRONTEND_URL}/reset_password?token=${token}'>here</a> to reset your password.</p>`,
    });

    // reset password
    const newPassword = faker.internet.password();
    await resetPassword({ token, password: newPassword });

    // login with username and new password
    const userWithUsername = { login: userData.username, password: newPassword };
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
