import {
  makeStyles, Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';

export interface InfoCardProps {
  title: string;
  description: string;
  textLink: string;
  link: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  textLinkStyle: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '1.3em',
    fontWeight: 500,
  },
  titleStyle: {
    fontSize: '1.7em',
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
  descriptionStyle: {
    textAlign: 'justify',
    fontSize: '1.15em',
    lineHeight: '1.5em',
    fontWeight: 500,
    opacity: 0.9,
  },
  buttonLink: {
    borderWidth: '0px',
    backgroundColor: 'rgba(0,0,0,0)',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    marginTop: theme.spacing(1),
    textDecoration: 'none',
  },
}));

function InfoCard(props: InfoCardProps): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const {
    title,
    description,
    textLink,
    link,
  } = props;
  const isExternalLink = link.match(/^(https:\/\/)/);
  const styledLink = (
    <Typography className={classes.textLinkStyle}>
      {textLink}
    </Typography>
  );

  return (
    <div className={classes.container}>
      <Typography className={classes.titleStyle}>
        {title}
      </Typography>
      <Typography className={classes.descriptionStyle}>
        {description}
      </Typography>
      {isExternalLink ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className={classes.buttonLink}
        >
          {styledLink}
        </a>
      ) : (
        <button
          type="button"
          className={classes.buttonLink}
          onClick={() => (router.push({ pathname: link }))}
        >
          {styledLink}
        </button>
      )}
    </div>
  );
}

export default InfoCard;
