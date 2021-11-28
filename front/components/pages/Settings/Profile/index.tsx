import React, { useState } from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { useViewer } from 'hooks/auth';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'next-i18next';

import WrappedLoader from 'components/WrappedLoader';

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
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackBarState>({ type: 'success' });
  const [update] = useMutation(UPDATE, {
    onError: (error) => {
      setSnackbar({ type: 'error', message: error.message });
      setIsOpen(true);
    },
    onCompleted: () => {
      setSnackbar({ type: 'success', message: t('settings.success') });
      setIsOpen(true);
    },
  });

  const updateSchema = yup.object().shape({
    username: yup.string().min(1).required(),
    email: yup.string().email().required(),
    description: yup.string(),
  });

  if (!viewer) {
    return (
      <div className={classes.containerLoader}>
        <WrappedLoader />
      </div>
    );
  }

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
          <span className={classes.title}>{t('settings.profile.username')}</span>
          <div className={classes.line}>
            <TextInput
              type="text"
              name="username"
              placeholder={t('settings.profile.usernameP')}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button} data-testid="save-username">
              {t('buttons.save')}
            </Button>
          </div>
          <span className={classes.title}>{t('settings.profile.email')}</span>
          <div className={classes.line}>
            <TextInput
              type="email"
              name="email"
              placeholder={t('settings.profile.emailP')}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button} data-testid="save-email">
              {t('buttons.save')}
            </Button>
          </div>
          <span className={classes.title}>{t('settings.profile.description')}</span>
          <div className={classes.column}>
            <TextInput
              type="text"
              name="description"
              placeholder={t('settings.profile.descriptionP')}
              fullWidth
              multiline
              disableHelperText
              rows={6}
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button} data-testid="save-description">
              {t('buttons.save')}
            </Button>
          </div>
        </Form>
      </Formik>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => setIsOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={() => setIsOpen(false)} severity={snackbar.type} data-testid="alert">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Profile;
