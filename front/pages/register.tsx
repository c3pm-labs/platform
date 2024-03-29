import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import { useRegister } from 'hooks/auth';
import { makeStyles, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'next-i18next';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TextLink from 'components/TextLink';
import TextInput from 'components/TextInput';
import PasswordInput from 'components/PasswordInput';
import Button from 'components/Button';
import { RegisterParams, registerSchema } from 'utils/validation';
import Head from 'components/Head';
import Logo, { LogoProps } from 'components/Logo';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    height: '100vh',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  line: {
    [theme.breakpoints.up('md')]: {
      width: '1px',
      height: '100vh',
      marginRight: '10px',
      marginLeft: '10px',
      backgroundColor: theme.palette.grey[400],
    },
  },
  rowContainer: {
    display: 'flex',
    width: '50%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8vw',
    },
  },
  formContainer: {
    display: 'flex',
    maxHeight: '70%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
    },
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 150,
    minWidth: 280,
    '& .MuiFormControl-root': {
      marginBottom: theme.spacing(2),
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    minWidth: 175,
    fontSize: 24,
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  login: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[400],
    marginTop: theme.spacing(4),
  },
}));

const Register: NextPage = () => {
  const classes = useStyles();
  const { register, registerError } = useRegister();

  const initialValues: RegisterParams = { username: '', email: '', password: '' };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('common');

  const getSize = (): LogoProps['size'] => {
    if (isMobile) {
      return 'lg';
    }
    if (matches) {
      return 'xl';
    }
    return 'lg';
  };

  return (
    <>
      <Head title="c3pm - register" />
      <div className={classes.container}>
        <div className={classes.rowContainer}>
          <Logo type={isDesktop ? 'baseline' : 'classic'} size={getSize()} theme={theme.palette.type} />
        </div>
        <div className={classes.line} />
        <div className={classes.formContainer}>
          <Typography
            variant="subtitle1"
            className={classes.text}
          >
            {t('register.title')}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={async (values: RegisterParams): Promise<void> => {
              await register(values);
            }}
          >
            <Form className={classes.input}>
              <Typography
                variant="body2"
                color="error"
                className={classes.error}
              >
                {t(registerError.error?.message)}
              </Typography>
              <TextInput
                type="text"
                name="username"
                label={t('register.username')}
                required
                fullWidth
              />
              <TextInput
                type="email"
                name="email"
                label={t('register.email')}
                required
                fullWidth
              />
              <PasswordInput
                name="password"
                label={t('register.password')}
                required
                fullWidth
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                {t('buttons.register')}
              </Button>
            </Form>
          </Formik>
          <Typography
            variant="caption"
            className={classes.login}
          >
            {t('register.account')}
            <Typography noWrap>
              &nbsp;
            </Typography>
            <TextLink href="/login">{t('buttons.login')}</TextLink>
          </Typography>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => (
  {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
);

export default Register;
