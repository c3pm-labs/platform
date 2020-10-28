import { getDataFromTree } from '@apollo/react-ssr';

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

export default withApollo(Home, { getDataFromTree });
