import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(124.57deg, rgba(38, 179, 239, 0.2) 37.9%, rgba(255, 112, 68, 0.2) 74.33%)',
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
