import Head from 'next/head';
import { ReactNode, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ColorThemeProvider, useColorTheme } from '../utils/colorTheme';
import { getDesignTokens } from '../utils/theme';

function Theme({ children }: { children: ReactNode }) {
  const [colorTheme] = useColorTheme();

  const appTheme = useMemo(() => createMuiTheme(getDesignTokens(colorTheme)), [colorTheme]);

  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <ColorThemeProvider>
      <Theme>
        <Head>
          <title>c3pm</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0106/8707.js" async />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </Theme>
    </ColorThemeProvider>
  );
}

export default App;
