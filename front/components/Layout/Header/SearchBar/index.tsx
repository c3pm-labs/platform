import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import TextInput from 'components/TextInput';

export interface SearchBarProps {
  className?: string;
}

function SearchBar({ className }: SearchBarProps): JSX.Element {
  const router = useRouter();
  const search = router.query.q || '';

  function handleSubmit(values: { search: string }): void {
    if (values.search) {
      router.push({ pathname: '/search', query: { q: values.search } });
    }
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ search }}
    >
      <Form
        className={className}
      >
        <TextInput
          disableHelperText
          fullWidth
          name="search"
          type="search"
          placeholder="search..."
        />
      </Form>
    </Formik>
  );
}

export default SearchBar;
