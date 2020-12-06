import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';

import withApollo from 'utils/withApollo';
import Button from 'components/Button';
import Head from 'components/Head';
import Logo from 'components/Logo';
import PasswordInput from 'components/PasswordInput';
import { resetPasswordSchema } from 'utils/validation';

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    minWidth: 175,
    fontSize: 24,
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
    width: '20%',
    margin: 'auto',
    flexDirection: 'column',
  },
  buttonLink: {
    display: 'flex',
    margin: 'auto',
    borderWidth: '0px',
    backgroundColor: 'rgba(0,0,0,0)',
    cursor: 'pointer',
    outline: 'none',
    marginTop: theme.spacing(3),
  },
}));

function ForgotPassword(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();

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
        initialValues={{ password: '', confirmPassword: '' }}
        onSubmit={(): void => {
          (router.push({ pathname: '/login' }));
        }}
      >
        <Form noValidate className={classes.form}>
          <PasswordInput
            name="password"
            label="new password"
            required
            fullWidth
          />
          <PasswordInput
            name="confirmPassword"
            label="confirm password"
            required
            fullWidth
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
          >
            Confirm new password
          </Button>
        </Form>
      </Formik>
      <button
        type="button"
        className={classes.buttonLink}
        onClick={() => (router.push({ pathname: '/' }))}
      >
      </button>
    </>
  );
}

export default withApollo(ForgotPassword);
