import { render, cleanup, waitFor } from '@testing-library/react';
import { createRouter, useRouter } from 'next/router';
import { RouterContext } from 'next-server/dist/lib/router-context';
// import Router from 'next/router';

// const router = createRouter('', { user: 'nikita' }, '', {
//   initialProps: {},
//   pageLoader: jest.fn(),
//   App: jest.fn(),
//   Component: jest.fn(),
// });

// import routeData from 'react-router';

// const mockLocation = {
//   pathname: '/welcome',
//   hash: '',
//   search: '',
//   state: ''
// }
// beforeEach(() => {
//   jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
// });

// jest.mock('next/router', () => ({
//   ...jest.requireActual('next/router'), // use actual for all non-hook parts
//   useRouter: () => ({
//     companyId: 'company-id1',
//     teamId: 'team-id1',
//   }),
// }));

import React from 'react';
import { NextPage } from 'next';

import LayoutToTest from './LayoutToTest';



const router = createRouter('', { user: 'nikita' }, '', {
  initialProps: {},
  pageLoader: jest.fn(),
  App: jest.fn(),
  Component: jest.fn(),

});

// import UserInfo from './$user';

const UserInfo : NextPage = () => {
  // console.log('useRouter:', useRouter);
  // const router = useRouter();
  console.log('router in useRouter:', router);

  const { query } = router;

  return (
    <div>
      Hello
      {query.user}
    </div>
  );
};

afterEach(cleanup);

it('Should render correctly on route: /users/nikita', async () => {
  const { getByText } = render(
    <RouterContext.Provider value={router}>
      {/* <LayoutToTest />/ */}
      <UserInfo />
    </RouterContext.Provider>,
  );

  await waitFor(() => getByText(/Hello nikita!/i));
});

// test('Layout', () => {
//   jest.mock('next/router', () => ({ push: jest.fn() }));
//   // jest.spyOn(hooks, 'useRouter').mockImplementation(() => (router));
//   const { container } = render(<LayoutToTest />);

//   // const { container } = render(
//   //   <RouterContext.Provider value={router}>
//   //     <LayoutToTest />
//   //   </RouterContext.Provider>,
//   // );

//   expect(container).toMatchInlineSnapshot('');
// });

// test("Layout Responsive mobile", () => {

//   window = Object.assign(window, { innerWidth: 500 });

//   const { container } = render(<Layout>Toto</Layout>);

//   expect(container).toMatchInlineSnapshot(``);
// });
