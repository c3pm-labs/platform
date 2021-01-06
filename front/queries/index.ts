import { gql } from '@apollo/client';

export const USER = gql`
    query user($id: String) {
        user(id: $id) {
            id,
            username,
            email,
            description,
            packages(first: 1000, last: 0) {
                name
                author {
                    username
                }
                versions(first: 1000, last: 0) {
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
            description
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

export const UPDATEPASSWORD = gql`
    mutation updatePassword($id: String!, $password: String!, $newPassword: String!) {
        updatePassword(id: $id, password: $password, newPassword: $newPassword) {
            id
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
                versions(first: 1000, last: 0) {
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
            versions(first: 1000, last: 0) {
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

export const FORGOT = gql`
    mutation forgotPassword($email: String!) {
        forgotPassword(email: $email) {
            id,
        }
    }
`;

export const RESET = gql`
    mutation resetPassword($token: String!, $password: String!) {
        resetPassword(token: $token, password: $password) {
            id,
        }
    }
`;
