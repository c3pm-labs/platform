import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';

function getFontSize(size: string): number {
  if (size === 'xl') {
    return 30;
  } if (size === 'lg') {
    return 20;
  } if (size === 'md') {
    return 16;
  }
  return 10;
}

function getSize(type: string, size: string): { width: number | string; height: number | string} {
  let width: string | number = 'auto';
  let height: string | number = 'auto';

  if (type === 'mini') {
    if (size === 'xl') {
      height = 200;
    } else if (size === 'lg') {
      height = 100;
    } else if (size === 'md') {
      height = 80;
    } else if (size === 'sm') {
      height = 40;
    } else {
      height = 'auto';
    }
  } else if (size === 'xl') {
    width = 600;
  } else if (size === 'lg') {
    width = 300;
  } else if (size === 'md') {
    width = 200;
  } else if (size === 'sm') {
    width = 100;
  } else {
    width = '100%';
  }
  return ({ width, height });
}

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  baseline: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: (props: { size: string}): number => getFontSize(props.size),
    textDecoration: 'none',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export interface LogoProps {
  type?: 'classic' | 'mini' | 'baseline';
  size?: 'sm' | 'md' | 'lg' | 'xl' | null;
  className?: string;
}

const Logo = ({ type = 'classic', size = null, className }: LogoProps): JSX.Element => {
  const classes = useStyles({ size });
  const src = type === 'mini' ? '/assets/c3pm_3.png' : '/assets/c3pm.png';
  const dimension = getSize(type, size);

  return (
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={classes.link}>
        <div className={classes.logo}>
          <img src={src} className={className} alt={`${type}-${size} c3pm logo`} width={dimension.width} height={dimension.height} />
          { type === 'baseline' && (<Typography className={classes.baseline}>C++ Package Manager</Typography>)}
        </div>
      </a>
    </Link>
  );
};

export default Logo;
