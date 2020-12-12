import { useQuery } from '@apollo/client';
import { User } from 'types';
import { USER } from 'queries';

export interface UseUserProps {
  id: string;
}

export function useUser({ id }: UseUserProps): User {
  const { data, loading, error } = useQuery<{ user: User }>(USER, {
    variables: { id },
  });

  if (loading || error || !data) {
    return null;
  }

  return data.user;
}
