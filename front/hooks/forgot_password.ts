import { useMutation } from '@apollo/client';
import { User } from 'types';
import { FORGOT, RESET } from 'queries';

import { ForgotParams } from 'utils/validation';

export interface ResetProps {
  token: string;
  password: string;
}

export function useReset(): (variables: ResetProps) => Promise<void> {
  const [reset] = useMutation<{ reset: User }, ResetProps>(RESET, {
  });

  return (async (variables: ResetProps): Promise<void> => {
    await reset({ variables });
  });
}

export function useForgot(): (variables: ForgotParams) => Promise<void> {
  const [forgot] = useMutation<{ forgot: User }, ForgotParams>(FORGOT, {
  });

  return (async (variables: ForgotParams): Promise<void> => {
    await forgot({ variables });
  });
}
