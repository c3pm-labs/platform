import Head from 'next/head';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from 'utils/theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>c3pm</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0106/8707.js" async />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
