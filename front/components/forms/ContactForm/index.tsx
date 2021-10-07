import { useContext } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import { contactFormSchema } from 'utils/validation';
import { ModalContext } from 'utils/contexts/modalContext';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '500px',
    [theme.breakpoints.down('md')]: {
      minWidth: '330px',
    },
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    padding: '2rem',
  },
  namesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  nameContainer: {
    width: '48%',
  },
  input: {
    borderRadius: '6px',
    marginTop: '1rem',
    color: 'white',
    '& .MuiInputBase-root': {
      color: 'white !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  button: {
    height: '35px',
    width: '200px',
    '&:nth-child(2)': {
      marginLeft: '1rem',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '2rem',
  },
}));

type ContactParams = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm = (): JSX.Element => {
  const classes = useStyles();
  const { modalDispatch } = useContext(ModalContext);
  const initialValues: ContactParams = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h1">
        Contact us
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={async (values): Promise<void> => {
          // TODO Call Backend mutation
          modalDispatch({ open: false, children: <></> });
        }}
      >
        <Form className={classes.form}>
          <Typography color="error" variant="body2" />
          <div className={classes.namesContainer}>
            <TextInput
              className={`${classes.input} ${classes.nameContainer}`}
              label="Firstname"
              name="firstName"
              placeholder="Firstname"
              type="text"
              fullWidth
              required
            />
            <TextInput
              className={`${classes.input} ${classes.nameContainer}`}
              label="Lastname"
              name="lastname"
              placeholder="Lastname"
              type="text"
              fullWidth
            />
          </div>
          <TextInput
            className={classes.input}
            label="Email"
            name="email"
            placeholder="Email"
            type="text"
            fullWidth
            required
          />
          <TextInput
            className={classes.input}
            label="Message"
            name="message"
            placeholder="Message"
            type="text"
            fullWidth
            rows={6}
            multiline
            required
          />
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              color="primary"
              variant="outlined"
              type="button"
              onClick={() => {
                modalDispatch({ open: false, children: <></> });
              }}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
            >
              Send
            </Button>
          </div>

        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
