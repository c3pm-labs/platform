import { FC, ReactElement } from 'react';
import {
  Queries, render, RenderOptions, RenderResult,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { VIEWER } from 'queries';

import { fakeViewer } from './builder';

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const mocks = [
  {
    request: {
      query: VIEWER,
    },
    result: {
      data: {
        viewer: fakeViewer,
      },
    },
  },
];

useRouter.mockImplementation(() => ({
  route: '',
  pathname: '',
  query: '',
  asPath: '',
}));

type AllTheProvidersProps = {
  children: JSX.Element;
};

const AllTheProviders: FC = (props: AllTheProvidersProps): JSX.Element => {
  const { children } = props;

  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult<Queries, HTMLElement> => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
