import { useMutation, useQuery } from '@apollo/client';
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

export function useRegister(): (variables: RegisterParams) => Promise<void> {
  const router = useRouter();
  const [register] = useMutation<{register: Viewer}, RegisterParams>(REGISTER, {
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

  return (async (variables: RegisterParams): Promise<void> => {
    await register({ variables });
  });
}

export function useLogin(): (variables: LoginParams) => Promise<void> {
  const router = useRouter();
  const [login] = useMutation<{ login: Viewer}, LoginParams>(LOGIN, {
    onError: (e) => {
      if (e.graphQLErrors[0]?.extensions?.code === 'FORBIDDEN') {
        // eslint-disable-next-line no-console
        console.log('Invalid email or password');
      }
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

  return (async (variables: LoginParams): Promise<void> => {
    await login({ variables });
  });
}
