import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from 'utils/withApollo';

import Layout from '../index';

function LayoutToTest(): JSX.Element {
  return (
    <Layout>
      Toto
    </Layout>
  );
}

export default withApollo(LayoutToTest, { getDataFromTree });




// import { render, cleanup, waitFor } from '@testing-library/react';
// import { createRouter } from 'next/router';
// import { RouterContext } from 'next-server/dist/lib/router-context';

// const router = createRouter('', { user: 'nikita' }, '', {
//   initialProps: {},
//   pageLoader: jest.fn(),
//   App: jest.fn(),
//   Component: jest.fn(),
// });


// afterEach(cleanup);

// it('Should render correctly on route: /users/nikita', async () => {
//   const { getByText } = render(
//     <RouterContext.Provider value={router}>
//     </RouterContext.Provider>,
//   );

//   await waitFor(() => getByText(/Hello nikita!/i));
// });
