import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

import { ModalContext } from 'utils/contexts/modalContext';
import ContactForm from 'components/forms/ContactForm';
import TextLink from 'components/TextLink';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    minHeight: '6em',
    backgroundColor: theme.palette.background.default,
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
  contactText: {
    fontSize: 14,
    color: theme.palette.grey[500],
    cursor: 'pointer',
  },
}));

function Footer(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const { modalDispatch } = useContext(ModalContext);

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
        <span>{t('footer.general')}</span>
        {linkElement('https://docs.c3pm.io', 'Docs')}
        {linkElement('https://github.com/c3pm-labs/', 'Github')}
        {linkElement('https://github.com/c3pm-labs/c3pm/releases', t('footer.releases'))}
        <TextLink className={classes.text} href="/tos">
          {t('tos.title')}
        </TextLink>
      </div>
      <div className={classes.textContainer}>
        <span>{t('footer.contact')}</span>
        {linkElement('mailto:contact@c3pm.io', 'contact@c3pm.io')}
        {linkElement('https://github.com/c3pm-labs/c3pm/issues/new/choose', t('footer.issue'))}
        <Typography
          className={classes.contactText}
          onClick={() => {
            modalDispatch({ open: true, children: <ContactForm /> });
          }}
        >
          {t('footer.sendMsg')}
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
