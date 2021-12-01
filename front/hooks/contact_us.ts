import { MutationResult, useMutation } from '@apollo/client';
import { CONTACT } from 'queries';

import { ContactParams } from 'components/forms/ContactForm';

export interface ContactUsProps {
  contactUs: (variables: ContactParams) => Promise<void>;
  contactUsError: MutationResult<{contactUs: void}>;
}

export function useContactUs(): ContactUsProps {
  const [contactUs, error] = useMutation(CONTACT, {
    onError: (e) => {
      if (e.graphQLErrors) {
        // eslint-disable-next-line no-console
        console.log(`Error: ${e.graphQLErrors[0]?.extensions?.code} - ${
            e.graphQLErrors[0]?.message}`);
      }
    },
  });

  return ({
    contactUs: async (variables: ContactParams): Promise<void> => {
      await contactUs({
        variables: {
          ...variables,
        },
      });
    },
    contactUsError: error,
  });
}
