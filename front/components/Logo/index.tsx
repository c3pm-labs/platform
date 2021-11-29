import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@material-ui/core/styles';

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
  if (type === 'mini') {
    return ({ width: 30, height: 40 });
  }

  if (size === 'xl') {
    return ({ width: 600, height: 200 });
  }
  if (size === 'lg') {
    return ({ width: 300, height: 100 });
  }
  if (size === 'md') {
    return ({ width: 200, height: 35 });
  }
  if (size === 'sm') {
    return ({ width: 100, height: 35 });
  }
  return ({ width: '100%', height: 'auto' });
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
  theme?: 'light' | 'dark'
}

const Logo = ({
  type = 'classic', size = null, className, theme = 'light',
}: LogoProps): JSX.Element => {
  const classes = useStyles({ size });
  const chooseLogo = () => {
    const src = type === 'mini' ? '/assets/c3pm_3' : '/assets/c3pm';

    return theme === 'light' ? `${src}.png` : `${src}_white.png`;
  };
  const src = chooseLogo();
  const dimension = getSize(type, size);

  return (
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={classes.link}>
        <div className={classes.logo}>
          <Image
            alt={`${type}-${size} c3pm logo`}
            src={src}
            className={className}
            width={dimension.width}
            height={dimension.height}
          />
          { type === 'baseline' && (<Typography className={classes.baseline}>C++ Package Manager</Typography>)}
        </div>
      </a>
    </Link>
  );
};

export default Logo;
