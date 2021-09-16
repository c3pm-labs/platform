import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from 'components/Layout';

import Head from 'components/Head';
import Homepage from 'components/pages/Homepage';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head title="c3pm" />
      <Homepage />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default Home;
