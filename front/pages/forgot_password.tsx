import { useState } from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useForgot } from 'hooks/forgot_password';

import withApollo from 'utils/withApollo';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Head from 'components/Head';
import Logo from 'components/Logo';
import { ForgotParams, forgotSchema } from 'utils/validation';

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

function ForgotPassword(): JSX.Element {
  const classes = useStyles();
  const forgot = useForgot();
  const [emailSent, setEmailSent] = useState(false);

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
        Password forgotten
      </Typography>
      {
        emailSent
          ? (
            <Typography
              variant="subtitle1"
              className={classes.text}
            >
              Email sent. Check your inbox.
            </Typography>
          ) : (
            <Typography
              variant="subtitle1"
              className={classes.text}
            >
              Enter your email and click the button below to receive a link to reset your password.
            </Typography>
          )
      }
      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgotSchema}
        onSubmit={async (email: ForgotParams): Promise<void> => {
          await forgot(email);
          setEmailSent(true);
        }}
      >
        <Form noValidate className={classes.form}>
          <div className={classes.input}>
            <TextInput
              type="text"
              name="email"
              label="email"
              required
              fullWidth
            />
          </div>
          <div className={classes.button}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Send password reset email
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default withApollo(ForgotPassword);
