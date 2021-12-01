import React, { useState } from 'react';
import {
  makeStyles, Snackbar,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'next-i18next';

import WrappedLoader from 'components/WrappedLoader';

import Button from '../../../Button';
import { useViewer } from '../../../../hooks/auth';
import { UPDATEPASSWORD } from '../../../../queries';
import PasswordInput from '../../../PasswordInput';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 0.61,
    paddingLeft: theme.spacing(3),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  containerLoader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '18%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(4),
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '1.8em',
    fontWeight: 500,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: 10,
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
  },
  input: {
    marginBottom: theme.spacing(3),
  },
}));

type SnackBarState = {
  type: 'success' | 'error';
  message?: string;
};

function Security(): JSX.Element {
  const classes = useStyles();
  const viewer = useViewer();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackBarState>({ type: 'success' });
  const [updatePassword] = useMutation(UPDATEPASSWORD, {
    onError: (error) => {
      setSnackbar({ type: 'error', message: error.message });
      setIsOpen(true);
    },
    onCompleted: () => {
      setSnackbar({ type: 'success', message: t('settings.successPassword') });
      setIsOpen(true);
    },
  });

  const updateSchema = yup.object().shape({
    password: yup.string().required(),
    newPassword: yup.string().required().min(8),
  });

  if (!viewer) {
    return (
      <div className={classes.containerLoader}>
        <WrappedLoader />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Formik
        validationSchema={updateSchema}
        initialValues={{}}
        onSubmit={async (values): Promise<void> => {
          await updatePassword({
            variables: {
              id: viewer.id,
              ...values,
            },
          });
        }}
      >
        <Form className={classes.form}>
          <span className={classes.title}>{t('settings.security.password')}</span>
          <div className={classes.column}>
            <PasswordInput
              label={t('settings.security.passwordP')}
              name="password"
              placeholder={t('settings.security.passwordP')}
              fullWidth
              className={classes.input}
              autoComplete="none"
            />
            <PasswordInput
              label={t('settings.security.newPassword')}
              name="newPassword"
              placeholder={t('settings.security.newPassword')}
              fullWidth
              autoComplete="none"
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              {t('buttons.save')}
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

export default Security;
