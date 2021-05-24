import { useMemo } from 'react'
import { ApolloClient, HttpLink, createHttpLink, InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

export const isServer = () => typeof window === `undefined`;

const fetchHack = (input, init) => {
  const shouldRewriteUri = isServer();
  if (shouldRewriteUri)
    input = input.replace(process.env.GRAPHQL_URL);
    // , "http://platform_back:4000/graphql");
  return fetch(input, init);
};

function createApolloClient() {
  return new ApolloClient({
    ssrMode: isServer(),
    link: createHttpLink({
      uri:  process.env.GRAPHQL_URL,
      credentials: 'include',
      // fetch: fetchHack,
      // headers: {
      //   cookie: req.header('Cookie'),
      // },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    _apolloClient.cache.restore(data)
  }
  if (isServer()) return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}