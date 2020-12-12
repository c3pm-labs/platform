import { gql } from '@apollo/client';

export const USER = gql`
    query user($id: String) {
        user(id: $id) {
            id,
            username,
            email,
            description,
            packages(first: 0, last: 10) {
                name
                author {
                    username
                }
                versions(first: 0, last: 10) {
                    version
                    publishedAt
                }
                latest {
                    description
                    publishedAt
                    version
                },
            }
        }
    }
`;

export const VIEWER = gql`
    query {
        viewer {
            id
            email
            username
        }
    }
`;

export const LOGOUT = gql`
    mutation logout {
        logout {
            id
            username
            email
        }
    }
`;

export const REGISTER = gql`
    mutation register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
            id,
            email,
            username,
        }
    }
`;

export const LOGIN = gql`
    mutation login($login: String!, $password: String!) {
        login(login: $login, password: $password) {
            id,
            email,
            username,
        }
    }
`;

export const UPDATE = gql`
    mutation update($id: String!, $username: String, $email: String, $description: String) {
        update(id: $id, username: $username, email: $email, description: $description) {
            id,
            username,
            email,
            description,
        }
    }
`;

export const PACKAGE_FROM_VERSION = gql`
    query packageFromVersion($packageName: String!, $version: String) {
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
                versions {
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
`;

export const SEARCH = gql`
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
`;
