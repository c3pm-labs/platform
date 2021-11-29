import Head from 'next/head';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';

import client from 'utils/client';
import theme from 'utils/theme';
import Modal from 'components/Modal';
import { ModalProvider } from 'utils/contexts/modalContext';

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
        <Head>
          <title>c3pm</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0106/8707.js" async />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
        <Modal />
      </ModalProvider>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default appWithTranslation(App);
