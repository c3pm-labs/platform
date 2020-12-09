import { useMutation } from '@apollo/client';
import { User } from 'types';
import { FORGOT } from 'queries';

import { ForgotParams } from 'utils/validation';

export default function useForgot(): (variables: ForgotParams) => Promise<void> {
  const [forgot] = useMutation<{ forgot: User }, ForgotParams>(FORGOT, {
  });

  return (async (variables: ForgotParams): Promise<void> => {
    await forgot({ variables });
  });
}
