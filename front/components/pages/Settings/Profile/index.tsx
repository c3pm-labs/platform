import React, { useState } from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { useViewer } from 'hooks/auth';
import { Alert } from '@material-ui/lab';

import { UPDATE } from '../../../../queries';
import TextInput from '../../../TextInput';
import Button from '../../../Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 0.61,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(4),
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: theme.spacing(4),
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '1.8em',
    fontWeight: 500,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  button: {
    marginLeft: 10,
    width: 100,
    height: 40,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: theme.spacing(4),
    alignItems: 'flex-start',
    justifyContent: 'center',
    '& button': {
      marginLeft: 0,
      marginTop: 10,
    },
  },
}));

type SnackBarState = {
  type: 'success' | 'error';
  message?: string;
};

function Profile(): JSX.Element {
  const classes = useStyles();
  const viewer = useViewer();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackBarState>({ type: 'success' });
  const [update] = useMutation(UPDATE, {
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      console.log('TOTO!');
      setSnackbar({ type: 'error', message: error.message });
      setIsOpen(true);
    },
    onCompleted: () => {
      console.log('SALUT!');
      setSnackbar({ type: 'success', message: 'Infos successfully updated!' });
      setIsOpen(true);
    },
  });

  const updateSchema = yup.object().shape({
    username: yup.string().min(1).required(),
    email: yup.string().email().required(),
    description: yup.string(),
  });

  if (!viewer) return <div>Loading...</div>;

  const initialValues = {
    username: viewer?.username,
    email: viewer?.email,
    description: viewer?.description,
  };

  return (
    <div className={classes.container}>
      <Formik
        validationSchema={updateSchema}
        initialValues={initialValues}
        onSubmit={async (values): Promise<void> => {
          await update({
            variables: {
              id: viewer.id,
              ...values,
            },
          });
        }}
      >
        <Form className={classes.form}>
          <span className={classes.title}>Username :</span>
          <div className={classes.line}>
            <TextInput
              type="text"
              name="username"
              placeholder="username"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Save
            </Button>
          </div>
          <span className={classes.title}>Email :</span>
          <div className={classes.line}>
            <TextInput
              type="email"
              name="email"
              placeholder="email"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Save
            </Button>
          </div>
          <span className={classes.title}>Description :</span>
          <div className={classes.column}>
            <TextInput
              type="text"
              name="description"
              placeholder="description"
              fullWidth
              multiline
              disableHelperText
              rows={6}
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Save
            </Button>
          </div>
        </Form>
      </Formik>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => setIsOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={() => setIsOpen(false)} severity={snackbar.type}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Profile;
