import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import TextInput from 'components/TextInput';

export interface SearchBarProps {
  className?: string;
  dataTestId?: string;
}

function SearchBar(props: SearchBarProps): JSX.Element {
  const {
    className,
    dataTestId,
  } = props;
  const router = useRouter();
  const { t } = useTranslation('common');
  const { q, tags } = router.query;
  const search = q || '';

  function handleSubmit(values: { search: string }): void {
    router.push({ pathname: '/search', query: { q: values.search, ...(tags ? { tags } : {}), page: 1 } });
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ search }}
      enableReinitialize
    >
      <Form
        className={className}
      >
        <TextInput
          data-testid={dataTestId}
          disableHelperText
          fullWidth
          name="search"
          type="search"
          placeholder={t('search')}
        />
      </Form>
    </Formik>
  );
}

export default SearchBar;
