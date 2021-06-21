import React from 'react';
import { Hidden } from '@material-ui/core';

import Loader from 'components/Loader';

const WrappedLoader = (): JSX.Element => (
  <>
    <Hidden implementation="css" smUp>
      <Loader size="sm" />
    </Hidden>
    <Hidden implementation="css" xsDown>
      <Loader size="xl" />
    </Hidden>
  </>
);

export default WrappedLoader;
