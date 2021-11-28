import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import { useLogin } from 'hooks/auth';
import { makeStyles, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'next-i18next';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TextInput from 'components/TextInput';
import PasswordInput from 'components/PasswordInput';
import Button from 'components/Button';
import { LoginParams, loginSchema } from 'utils/validation';
import TextLink from 'components/TextLink';
import Logo, { LogoProps } from 'components/Logo';
import Head from 'components/Head';

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
  register: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[400],
    marginTop: theme.spacing(4),
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  forgotPassword: {
    display: 'flex',
    marginTop: theme.spacing(4),
  },
}));

const Login: NextPage = () => {
  const classes = useStyles();
  const { login, loginError } = useLogin();
  const initialValues: LoginParams = { login: '', password: '' };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('common');

  const getSize = (): LogoProps['size'] => {
    if (isMobile) {
      return null;
    }
    if (matches) {
      return 'xl';
    }
    return 'lg';
  };

  return (
    <>
      <Head title="c3pm - login" />
      <div className={classes.container}>
        <div className={classes.rowContainer}>
          <Logo type={isDesktop ? 'baseline' : 'classic'} size={getSize()} />
        </div>
        <div className={classes.line} />
        <div className={classes.formContainer}>
          <Typography
            variant="subtitle1"
            className={classes.text}
          >
            {t('login.welcome')}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (values: LoginParams): Promise<void> => {
              await login(values);
            }}
          >
            <Form className={classes.input}>
              <Typography
                variant="body2"
                color="error"
                className={classes.error}
              >
                {t(loginError.error?.message)}
              </Typography>
              <TextInput
                type="text"
                name="login"
                label={t('login.emailOrUsername')}
                required
                fullWidth
              />
              <PasswordInput
                name="password"
                label={t('login.password')}
                required
                fullWidth
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                {t('buttons.login')}
              </Button>
            </Form>
          </Formik>
          <TextLink className={classes.forgotPassword} href="/forgot_password">{t('login.forgot')}</TextLink>
          <Typography
            variant="caption"
            className={classes.register}
          >
            {t('login.account')}
            <Typography noWrap>
              &nbsp;
            </Typography>
            <TextLink href="/register">{t('buttons.register')}</TextLink>
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

export default Login;
