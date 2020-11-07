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
    minHeight: '100px',
    height: '100px',
    maxHeight: '100px',
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      width: '100%',
      maxHeight: '300px',
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
  textButton: {
    color: 'white',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  customButton: {
    maxHeight: '36px',
  },
}));

const testSchema = yup.object().shape({
});

function Name(): JSX.Element {
  const classes = useStyles();
  const viewer = useViewer();
  const [update] = useMutation(UPDATE);

  if (!viewer) {
    return null;
  }

  return (
    <SettingWrapper
      title="Name :"
    >
      <Formik
        validationSchema={testSchema}
        initialValues={initialValues}
        onSubmit={(values: UpdateUserParams): void => {
          update({
            variables: {
              id: viewer.id,
              username: values.username,
            },
          });
        }}
      >
        <div className={classes.containerInput}>
          <Form className={classes.styleForm}>
            <InputFied
              name="username"
              label="Username :"
              value="Alice"
              multiline
            />
            <UpdateButton description="Update your name" onClick={(): void => (console.log('save'))} />
          </Form>
        </div>
      </Formik>
    </SettingWrapper>
  );
}

export default Name;
