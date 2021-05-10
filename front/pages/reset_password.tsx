import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useReset } from 'hooks/forgot_password';
import Typography from '@material-ui/core/Typography';

// import withApollo from 'utils/withApollo';
import Button from 'components/Button';
import Head from 'components/Head';
import Logo from 'components/Logo';
import PasswordInput from 'components/PasswordInput';
import { ResetParams, resetSchema } from 'utils/validation';

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      textAlign: 'center',
    },
    minWidth: 175,
    fontSize: 20,
  },
  logoContainer: {
    display: 'flex',
    height: 'auto',
    paddingTop: '3vw',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8vw',
    },
  },
  form: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    display: 'flex',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    display: 'flex',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    flexDirection: 'column',
  },
}));

function ResetPassword(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const reset = useReset();
  const { token } = router.query;

  return (
    <>
      <Head title="c3pm - login" />
      <div className={classes.logoContainer}>
        <Logo type="classic" size="lg" />
      </div>
      <Typography
        variant="h6"
        className={classes.text}
      >
        Reset password
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.text}
      >
        Enter your new password and password confirmation.
      </Typography>
      <Formik
        initialValues={{ password: '', confirm: '' }}
        validationSchema={resetSchema}
        onSubmit={async (params: ResetParams): Promise<void> => {
          await reset({ token: token.toString(), password: params.password });
          router.push({ pathname: '/login' });
        }}
      >
        <Form noValidate className={classes.form}>
          <div className={classes.input}>
            <PasswordInput
              name="password"
              label="new password"
              required
              fullWidth
            />
            <PasswordInput
              name="confirm"
              label="confirm password"
              required
              fullWidth
            />
          </div>
          <div className={classes.button}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
            >
              Confirm new password
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default ResetPassword;
