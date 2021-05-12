import React from 'react';
import Lottie from 'lottie-react';
import loaderC3PM from 'public/assets/loaderC3pm.json';
import { makeStyles } from '@material-ui/core';

function getSize(size: string): { width: string; height: string} {
  if (size === 'xl') {
    return ({ width: '200px', height: '200px' });
  }
  if (size === 'sm') {
    return ({ width: '120px', height: '120px' });
  }
  return ({ width: '100%', height: 'auto' });
}

const useStyles = makeStyles(() => ({
  container: {
    width: (props: { size: string }): string => getSize(props.size).width,
    height: (props: { size: string }): string => getSize(props.size).height,
  },
}));

export interface LoaderProps {
  size?: 'sm' | 'xl' | null;
  className?: string;
}

const Loader = (props: LoaderProps): JSX.Element => {
  const { size, className } = props;
  const classes = useStyles({ size });

  return (
    <div className={classes.container}>
      <Lottie className={className} animationData={loaderC3PM} />
    </div>
  );
};

export default Loader;
