import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    minHeight: '6em',
    backgroundColor: theme.palette.grey[100],
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: theme.spacing(2),
    '& span': {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: theme.spacing(1),
    },
  },
  text: {
    textDecoration: 'none',
    fontSize: 14,
    color: theme.palette.grey[500],
    marginBottom: 3,
  },
}));

function Footer(): JSX.Element {
  const classes = useStyles();
  const linkElement = (link: string, name: string) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={classes.text}
      href={link}
    >
      <Typography className={classes.text}>{name}</Typography>
    </a>
  );

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <span>General Information</span>
        {linkElement('https://docs.c3pm.io', 'Docs')}
        {linkElement('https://github.com/c3pm-labs/', 'Github')}
        {linkElement('https://github.com/c3pm-labs/c3pm/releases', 'Releases')}
      </div>
      <div className={classes.textContainer}>
        <span>Contact us</span>
        {linkElement('mailto:contact@c3pm.io', 'contact@c3pm.io')}
        {linkElement('https://github.com/c3pm-labs/c3pm/issues/new/choose', 'Submit an issue')}
      </div>
    </div>
  );
}

export default Footer;
