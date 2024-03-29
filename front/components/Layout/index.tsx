import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
