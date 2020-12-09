import * as fs from 'fs';
import { request } from 'http';

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
  const libName = 'testLib';

  // publish
  const publishPackage = async (file, apiKey, api, version) => {
    const form = new FormData();
    form.append('package', file, { filename: version });

    return api.post('/v1/auth/publish',
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

  // search
  const PublishandSearchForAPackage = async (api, apiKey, path, version) => {
    const lib = fs.createReadStream(`${__dirname}${path}`);
    await publishPackage(lib, apiKey, api, version);
    const res = await searchQuery({ keyword: libName });
    return res.data.search;
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

    // search the first version
    const searchRes = await PublishandSearchForAPackage(api, loginRes.data.apiKey, '/data/lib.tar', '1.0.0');
    expect(searchRes).toEqual([{
      name: libName,
      versions: expect.any(Array),
      author: { username: expect.any(String) },
      latest: {
        description: expect.any(String),
        license: expect.any(String),
        readme: expect.any(String),
        publishedAt: expect.any(String),
        version: '1.0.0',
      },
    }]);

    // search the new latest version
    const newSearchRes = await PublishandSearchForAPackage(api, loginRes.data.apiKey, '/data/lib-2.0.0.tar', '2.0.0');
    expect(newSearchRes).toEqual([{
      name: libName,
      versions: expect.any(Array),
      author: { username: expect.any(String) },
      latest: {
        description: expect.any(String),
        license: expect.any(String),
        readme: expect.any(String),
        publishedAt: expect.any(String),
        version: '2.0.0',
      },
    }]);

    // search a specific version
    const firstVersion = await packageFromVersionQuery({ packageName: libName, version: '1.0.0' });
    expect(firstVersion.data).toEqual({
      version: {
        description: expect.any(String),
        version: '1.0.0',
        readme: expect.any(String),
        package: {
          name: libName,
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
