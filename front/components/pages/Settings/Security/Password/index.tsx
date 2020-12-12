import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import PasswordInput from 'components/PasswordInput';

import SettingWrapper from '../../SettingWrapper';
import UpdateButton from '../../UpdateButton';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 'fit-content',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
    },
  },
  wrapperLabelAndInput: {
    display: 'flex',
    flex: 0.55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(5),
    minWidth: '200px',
    minHeight: '220px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      flex: 1,
      justifyContent: 'center',
      width: '100%',
    },
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.8,
    minWidth: '220px',
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      flex: 1,
    },
  },
  inivisiblelabel: {
    display: 'flex',
    flex: 0.2,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      flex: 0,
      paddingRight: 0,
    },
  },
  styleForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));

const passwordSchema = yup.object().shape({
  password: yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short.'),
});

function Password(): JSX.Element {
  const classes = useStyles();

  return (
    <SettingWrapper
      title="Password :"
    >
      <Formik
        validationSchema={passwordSchema}
        initialValues={{ password: '' }}
        onSubmit={(e): void => (console.log('username', e))}
      >
        <div className={classes.container}>
          <Form className={classes.styleForm}>
            <div className={classes.wrapperLabelAndInput}>
              <div className={classes.inivisiblelabel} />
              <div className={classes.containerInput}>
                <PasswordInput
                  name="current password"
                  fullWidth
                  label="Current password"
                />
                <PasswordInput
                  name="password"
                  fullWidth
                  label="New password"
                />
                <PasswordInput
                  name="new password"
                  fullWidth
                  label="New password again"
                />
              </div>
            </div>
            <UpdateButton description="Update your password" onClick={(): void => (console.log('save'))} />
          </Form>
        </div>
      </Formik>
    </SettingWrapper>
  );
}

export default Password;
