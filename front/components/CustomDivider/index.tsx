import { Divider, makeStyles } from '@material-ui/core';

type CustomDividerProps = {
  className: string;
};

const useStyles = makeStyles(() => ({
  divider: {
    backgroundImage:
      'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
    height: '1px',
    width: '100%',
  },
}));

const CustomDivider = ({ className }: CustomDividerProps): JSX.Element => {
  const classes = useStyles();

  return <Divider className={`${classes.divider} ${className}`} />;
};

export default CustomDivider;
