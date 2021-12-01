import { makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from 'components/Layout';
import Accordion from 'components/Accordion';
import CustomDivider from 'components/CustomDivider';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '5rem',
    background: theme.palette.type === 'light' ? 'linear-gradient(124.57deg, rgba(38, 179, 239, 0.2) 37.9%, rgba(255, 112, 68, 0.2) 74.33%)'
      : 'linear-gradient(124.57deg, rgba(38, 179, 239, 0.8) 37.9%, rgba(255, 112, 68, 0.8) 74.33%)',
  },
  title: {
    textAlign: 'center',
    padding: '1.5rem',
    fontSize: 30,
  },
  text: {
    marginBottom: '0.5rem',
    lineHeight: '22px',
  },
  divider: {
    maxWidth: '680px',
  },
  summaryWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '0.5rem',
    position: 'relative',
  },
  arrowContainer: {
    position: 'absolute',
    right: '0',
  },
  textContainer: {
    display: 'block',
  },
  introContainer: {
    maxWidth: '680px',
    padding: '1.5rem 0',
  },
  accordionContainer: {
    background: 'rgba(255, 255, 255, 0.088)',
    boxShadow:
      'inset 26.6472px -26.6472px 26.6472px rgba(194, 194, 194, 0.088), inset -26.6472px 26.6472px 26.6472px rgba(255, 255, 255, 0.088)',
    backdropFilter: 'blur(57.558px)',
    webkitBackdropFilter: 'blur(57.558px)',
    borderRadius: '6px',
    maxWidth: '680px',
  },
}));

type TosAccordionProps = {
  children: React.ReactNode;
  summaryText: string;
};

const TosAccordion = ({
  children,
  summaryText,
}: TosAccordionProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Accordion
      summary={(
        <div className={classes.summaryWrapper}>
          <Typography variant="h4" style={{ fontSize: 20 }}>{summaryText}</Typography>
          <div className={classes.arrowContainer}>
            <Image height={20} src="/icons/arrowDown.svg" width={20} />
          </div>
        </div>
      )}
    >
      <div className={classes.textContainer}>{children}</div>
    </Accordion>
  );
};

const Tos: NextPage = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');

  return (
    <Layout>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h1">
          {t('tos.title')}
        </Typography>
        <CustomDivider className={classes.divider} />
        <div className={classes.introContainer}>
          <Typography className={classes.text} variant="body1">
            {t('tos.intro.1')}
            <strong>{t('tos.abreviation')}</strong>
            {t('tos.intro.2')}
            <strong>{`« ${t('tos.user')} »`}</strong>
            {t('tos.intro.3')}
            <strong>{`« ${t('tos.abreviation')} ».`}</strong>
            .
          </Typography>
          <Typography className={classes.text} variant="body1">
            {t('tos.intro.4')}
          </Typography>
        </div>
        <div className={classes.accordionContainer}>
          <TosAccordion summaryText={t('tos.1.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.1.2')}
            </Typography>
          </TosAccordion>
          <TosAccordion summaryText={t('tos.2.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.2')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.3')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.4')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.5')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.6')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.2.7')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.3.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.3.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.3.2')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.4.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.4.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.4.2')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.4.3')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.4.4')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.4.5')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.5.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.5.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.5.2')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.5.3')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.5.4')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.5.5')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.6.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.6.1')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.7.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.7.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.7.2')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.7.3')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.7.4')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.7.5')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.8.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.8.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.8.2')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.8.3')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.8.4')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.8.5')}
            </Typography>
          </TosAccordion>

          <TosAccordion summaryText={t('tos.9.title')}>
            <Typography className={classes.text} variant="body1">
              {t('tos.9.1')}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {t('tos.9.2')}
            </Typography>
          </TosAccordion>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Tos;
