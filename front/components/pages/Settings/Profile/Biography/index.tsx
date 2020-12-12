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
      marginBottom: theme.spacing(1),
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
});

function Biography(): JSX.Element {
  const classes = useStyles();
  const viewer = useViewer();
  const [update] = useMutation(UPDATE);

  if (!viewer) {
    return null;
  }

  return (
    <SettingWrapper
      title="Biography :"
    >
      <Formik
        validationSchema={testSchema}
        initialValues={initialValues}
        onSubmit={(values: UpdateUserParams): void => {
          update({
            variables: {
              id: viewer.id,
              description: values.description,
            },
          });
        }}
      >
        <div className={classes.containerInput}>
          <Form className={classes.styleForm}>
            <InputFied
              name="description"
              label="Biography :"
              value="Software developer"
              rows={4}
              multiline
            />
            <UpdateButton description="Update your description" onClick={(): void => (console.log('save'))} />
          </Form>
        </div>
      </Formik>
    </SettingWrapper>
  );
}

export default Biography;
