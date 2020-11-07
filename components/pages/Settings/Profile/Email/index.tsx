import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { UPDATE } from 'queries';
import { useMutation } from '@apollo/client';
import { useViewer } from 'hooks/auth';

import InputFied from '../../InputField';
import SettingWrapper from '../../SettingWrapper';
import UpdateButton from '../../UpdateButton';
import { initialValues, UpdateUserParams } from '../utils/UpdateUtils';

const useStyles = makeStyles((theme) => ({
  containerInput: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      width: '100%',
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
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

const testSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
});

function Email(): JSX.Element {
  const classes = useStyles();
  const viewer = useViewer();
  const [update] = useMutation(UPDATE);

  if (!viewer) {
    return null;
  }

  return (
    <SettingWrapper
      title="Email :"
    >
      <Formik
        validationSchema={testSchema}
        initialValues={initialValues}
        onSubmit={(values: UpdateUserParams): void => {
          update({
            variables: {
              id: viewer.id,
              email: values.email,
            },
          });
        }}
      >
        <div className={classes.containerInput}>
          <Form className={classes.styleForm}>
            <InputFied name="email" label="Email :" value="alice.dupont@gmail.com" />
            <UpdateButton description="Update your email" onClick={(): void => (console.log('save'))} />
          </Form>
        </div>
      </Formik>
    </SettingWrapper>
  );
}

export default Email;
