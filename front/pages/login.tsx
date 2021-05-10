import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import { useLogin } from 'hooks/auth';
import { makeStyles, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// import withApollo from 'utils/withApollo';
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

function Login(): JSX.Element {
  const classes = useStyles();
  const { login, loginError } = useLogin();
  const initialValues: LoginParams = { login: '', password: '' };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            Welcome back!
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (values: LoginParams): Promise<void> => {
              await login(values);
            }}
          >
            <Form noValidate className={classes.input}>
              <Typography
                variant="body2"
                color="error"
                className={classes.error}
              >
                {loginError.error?.message}
              </Typography>
              <TextInput
                type="text"
                name="login"
                label="email or username"
                required
                fullWidth
              />
              <PasswordInput
                name="password"
                label="password"
                required
                fullWidth
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Sign in
              </Button>
            </Form>
          </Formik>
          <TextLink className={classes.forgotPassword} href="/forgot_password">Forgot password?</TextLink>
          <Typography
            variant="caption"
            className={classes.register}
          >
            Don&apos;t have an account?&nbsp;
            <TextLink href="/register">Sign Up</TextLink>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Login;
