import { useQuery } from '@apollo/client';
import { User } from 'types';
import { USER } from 'queries';

export interface UseUserProps {
  id: string;
}

export enum Status {
  NO_USER = 'noUser',
  LOADING = 'loading',
}

export function useUser({ id }: UseUserProps): User | Status {
  const { data, loading, error } = useQuery<{ user: User }>(USER, {
    variables: { id },
  });

  if (loading) {
    return Status.LOADING;
  }

  if (error || !data) {
    return Status.NO_USER;
  }

  return data.user;
}
