import { MutationResult, useMutation } from '@apollo/client';
import { User } from 'types';
import { FORGOT, RESET } from 'queries';

import { ForgotParams } from 'utils/validation';

export interface ResetProps {
  token: string;
  password: string;
}

export interface UseForgotProps {
  forgot: (variables: ForgotParams) => Promise<void>;
  forgotError: MutationResult<{forgot: User;}>
}

export function useReset(): (variables: ResetProps) => Promise<void> {
  const [reset] = useMutation<{ reset: User }, ResetProps>(RESET, {
  });

  return (async (variables: ResetProps): Promise<void> => {
    await reset({ variables });
  });
}

export function useForgot(): UseForgotProps {
  const [forgot, error] = useMutation<{ forgot: User }, ForgotParams>(FORGOT, {
  });

  return ({
    forgot: async (variables: ForgotParams): Promise<void> => {
      await forgot({ variables });
    },
    forgotError: error,
  });
}
