import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import TextInput from 'components/TextInput';

export interface SearchBarProps {
  className?: string;
}

function SearchBar({ className }: SearchBarProps): JSX.Element {
  const router = useRouter();
  const { q, tags, page = 1 } = router.query;
  const search = q || '';

  function handleSubmit(values: { search: string }): void {
    router.push({ pathname: '/search', query: { q: values.search, ...(tags ? { tags } : {}), ...(page ? { page } : {}) } });
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
