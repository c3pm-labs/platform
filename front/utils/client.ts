import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  credentials: 'include',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
})

export default client
