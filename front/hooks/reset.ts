import { useMutation } from '@apollo/client';
import { User } from 'types';
import { RESET } from 'queries';

export interface ResetProps {
  token: string;
  password: string;
}

export default function useReset(): (variables: ResetProps) => Promise<void> {
  const [reset] = useMutation<{ reset: User }, ResetProps>(RESET, {
  });

  return (async (variables: ResetProps): Promise<void> => {
    await reset({ variables });
  });
}
