import {
  makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  containerContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 0,
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 0,
    },
  },
  backSVG: {
    width: '12px',
    marginRight: theme.spacing(3),
  },
  horizonLine: {
    marginTop: theme.spacing(2),
    display: 'flex',
    width: '100%',
    opacity: 0.4,
    border: 'solid',
    height: '0px',
    borderWidth: '0.1px',
    borderRadius: `${theme.shape.borderRadius}px`,
    borderColor: `${theme.palette.text.disabled}`,
  },
}));

export interface BackButtonProps {
  title: string;
  goBack: () => void;
}

function BackButton(props: BackButtonProps): JSX.Element {
  const { title, goBack } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <button
        type="button"
        className={classes.containerContent}
        onClick={goBack}
      >
        <img className={classes.backSVG} src="/assets/back.svg" alt="back" />
        <Typography>
          {title}
        </Typography>
      </button>
      <div className={classes.horizonLine} />
    </div>
  );
}

export default BackButton;
