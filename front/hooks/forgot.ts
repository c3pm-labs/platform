import { useMutation } from '@apollo/client';
import { User } from 'types';
import { FORGOT } from 'queries';
import { useRouter } from 'next/router';

import { ForgotParams } from 'utils/validation';


export function useForgot(): (variables: ForgotParams) => Promise<void> {
  const router = useRouter();
  const [forgot] = useMutation<{ forgot: User }, ForgotParams>(FORGOT, {
  });

  return (async (variables: ForgotParams): Promise<void> => {
    await forgot({ variables });
  });
}
