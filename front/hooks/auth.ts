import { MutationResult, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Viewer } from 'types';
import {
  VIEWER, LOGOUT, REGISTER, LOGIN,
} from 'queries';

import { LoginParams, RegisterParams } from 'utils/validation';

export function useViewer(): Viewer | null {
  const { data, loading, error } = useQuery<{ viewer: Viewer}>(VIEWER);

  if (loading || error || !data) {
    return null;
  }
  return data.viewer;
}

export function useLogout(): () => Promise<void> {
  const router = useRouter();
  const [logout] = useMutation<{ logout: Viewer}>(LOGOUT, {
    onError: (e) => {
      if (e.graphQLErrors[0]?.extensions?.code === 'FORBIDDEN') {
        // eslint-disable-next-line no-console
        console.log('User not logged in');
      }
    },
    onCompleted: () => router.reload(),
  });

  return (async (): Promise<void> => {
    await logout();
  });
}

export interface UseRegisterProps {
  register: (variables: RegisterParams) => Promise<void>;
  registerError: MutationResult<{register: Viewer;}>
}

export function useRegister(): UseRegisterProps {
  const router = useRouter();
  const [register, error] = useMutation<{register: Viewer}, RegisterParams>(REGISTER, {
    onError: (e) => {
      if (e.graphQLErrors[0]?.extensions?.code === 'FORBIDDEN') {
        // eslint-disable-next-line no-console
        console.log('User already exists');
      }
    },
    onCompleted: () => {
      router.push('/');
    },
    update: (cache, { data: { register: viewer } }) => {
      cache.writeQuery({
        query: VIEWER,
        data: { viewer },
      });
    },
  });

  return ({
    register: async (variables: RegisterParams): Promise<void> => {
      await register({ variables });
    },
    registerError: error,
  });
}

export interface UseLoginProps {
  login: (variables: LoginParams) => Promise<void>;
  loginError: MutationResult<{login: Viewer;}>
}

export function useLogin() : UseLoginProps {
  const router = useRouter();

  const [login, error] = useMutation<{ login: Viewer}, LoginParams>(LOGIN, {
    onError: (e) => {
      // eslint-disable-next-line no-console
      console.log('Invalid email or password', e.graphQLErrors[0]?.extensions?.code);
    },
    onCompleted: () => {
      router.push('/');
    },
    update: (cache, { data: { login: viewer } }) => {
      cache.writeQuery({
        query: VIEWER,
        data: { viewer },
      });
    },
  });

  return ({
    login: async (variables: LoginParams): Promise<void> => {
      await login({ variables });
    },
    loginError: error,
  });
}
