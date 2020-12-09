import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useForgot } from 'hooks/forgot';

import withApollo from 'utils/withApollo';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Head from 'components/Head';
import Logo from 'components/Logo';
import { ForgotParams, forgotSchema } from 'utils/validation';
import { boolean } from 'yup';

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
}));

function ForgotPassword(): JSX.Element {
  const classes = useStyles();
  const forgot = useForgot();
  var boolean emailSent = false;
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
      <Typography
        variant="subtitle1"
        className={classes.text}
      >
        Enter your email and click the button below to receive a link to reset your password.
      </Typography>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgotSchema}
        onSubmit={(email: ForgotParams): void => {
          forgot(email);
        }}
      >
        <Form noValidate className={classes.form}>
          <TextInput
            type="text"
            name="email"
            label="email"
            required
            fullWidth
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
          >
            Send password reset email
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default withApollo(ForgotPassword);
