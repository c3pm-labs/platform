import { getDataFromTree } from '@apollo/react-ssr';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from 'components/Layout';
import withApollo from 'utils/withApollo';
import Head from 'components/Head';
import Homepage from 'components/pages/Homepage';

function Home(): JSX.Element {
  return (
    <Layout>
      <Head title="c3pm" />
      <Homepage />
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default withApollo(Home, { getDataFromTree });
