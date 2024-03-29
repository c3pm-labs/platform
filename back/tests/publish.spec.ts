/* eslint-disable @typescript-eslint/no-explicit-any */

import * as fs from 'fs';

import { gql } from 'apollo-server-express';
import faker from 'faker';
import FormData from 'form-data';

import { createAxiosInstance, createTestContext } from './__helpers__/context';

describe('publish and search', () => {
  const ctx = createTestContext();
  const userData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
  };
  const packageName = 'Hello';
  const keyword = 'Hello';

  const registerMutation = async (user: { email: string; password: string; username: string }): Promise<any> => ctx.server.graphql(gql`
      mutation Register($email: String!, $username: String!, $password: String!) {
          register(email: $email, username: $username, password: $password) {
              username
              email
          }
      }
  `, user);

  const searchQuery = async (params: { keyword: string, tags?: string[] }): Promise<any> => ctx.server.graphql(gql`
      query search($keyword: String!, $tags: [String!]) {
          search(keyword: $keyword, tags: $tags) {
              name,
              tags,
              versions(first: 1000, last: 0) {
                  description,
                  license,
                  readme,
                  publishedAt,
                  version,
                  tags,
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
                  tags,
              }
          }
      }
  `, params);

  const packageFromVersionQuery = async (params: { packageName: string, version: string }): Promise<any> => ctx.server.graphql(gql`
      query packageFromVersion($packageName: String!, $version: String!) {
          version(packageName: $packageName, version: $version) {
              description
              version
              readme
              package {
                  name
                  author {
                      username
                      id
                  }
                  versions(first: 0, last: 100) {
                      version
                      publishedAt
                  }
                  latest {
                      publishedAt
                      version
                  }
              }
          }
      }
  `, params);

  const packageQuery = async (params: { name: string }): Promise<any> => ctx.server.graphql(gql`
      query package($name: String!) {
          package(name: $name) {
              name,
              versions(first: 0, last: 100) {
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
  `, params);

  // publish
  const publishPackage = async (api, apiKey, path, libName, version) => {
    const lib = fs.createReadStream(`${__dirname}${path}`);
    const form = new FormData();
    form.append('package', lib, { filename: version });

    return api.post('/v1/packages/publish',
      form,
      {
        headers: {
          ...form.getHeaders(),
          name: libName,
          version,
          authorization: apiKey,
        },
      });
  };

  test('publish and search flow', async () => {
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

    // publish and search the first version
    await publishPackage(api, loginRes.data.apiKey, '/data/lib.tar', packageName, '1.0.0');
    const searchRes = await searchQuery({ keyword });
    expect(searchRes.data.search).toEqual([{
      name: packageName,
      versions: expect.any(Array),
      author: { username: expect.any(String) },
      tags: expect.arrayContaining(['hello', 'library']),
      latest: {
        description: expect.any(String),
        license: expect.any(String),
        readme: expect.any(String),
        tags: expect.arrayContaining(['hello', 'library']),
        publishedAt: expect.any(String),
        version: '1.0.0',
      },
    }]);

    // publish and search with tags to get the new latest version
    await publishPackage(api, loginRes.data.apiKey, '/data/lib-2.0.0.tar', packageName, '2.0.0');
    const newSearchRes = await searchQuery({ keyword: '', tags: ['hello', 'library'] });
    expect(newSearchRes.data.search).toEqual([{
      name: packageName,
      versions: expect.any(Array),
      author: { username: expect.any(String) },
      tags: expect.arrayContaining(['hello', 'library']),
      latest: {
        description: expect.any(String),
        license: expect.any(String),
        readme: expect.any(String),
        tags: expect.arrayContaining(['hello', 'library']),
        publishedAt: expect.any(String),
        version: '2.0.0',
      },
    }]);

    // search for a package by name
    const packageRes = await packageQuery({ name: packageName });
    expect(packageRes.data).toEqual({
      package: {
        name: packageName,
        versions: expect.any(Array),
        author: { username: expect.any(String) },
        latest: {
          description: expect.any(String),
          license: expect.any(String),
          readme: expect.any(String),
          publishedAt: expect.any(String),
          version: expect.any(String),
        },
      },
    });

    // search for a specific version
    const firstVersion = await packageFromVersionQuery({ packageName, version: '1.0.0' });
    expect(firstVersion.data).toEqual({
      version: {
        description: expect.any(String),
        version: '1.0.0',
        readme: expect.any(String),
        package: {
          name: packageName,
          author: {
            id: expect.any(String),
            username: expect.any(String),
          },
          versions: expect.any(Array),
          latest: {
            publishedAt: expect.any(String),
            version: '2.0.0',
          },
        },
      },
    });
  });
});
