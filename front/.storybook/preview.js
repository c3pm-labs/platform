import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../utils/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache()
});

const ApolloDecorator = (Story) => (<ApolloProvider client={client}><Story /></ApolloProvider>);
const ThemeDecorator = (Story) => (<MuiThemeProvider theme={theme}><Story/></MuiThemeProvider>)

export const decorators = [ApolloDecorator, ThemeDecorator]
