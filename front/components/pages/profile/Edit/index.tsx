import { Form, Formik } from 'formik';
import { Box, makeStyles } from '@material-ui/core';
import { Dispatch, SetStateAction } from 'react';

import TextInput from '../../../TextInput';
import Button from '../../../Button';
import { User } from '../../../../types';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  },
  description: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: 16,
    color: theme.palette.grey[600],
  },
  save: {
    display: 'flex',
    minWidth: 100,
  },
  cancel: {
    display: 'flex',
    minWidth: 100,
    marginLeft: theme.spacing(1),
  },
}));

export interface EditProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  user: User;
}

const Edit = ({ setIsEdit, user }: EditProps): JSX.Element => {
  const classes = useStyles();
  const onSubmit = null;

  return (
    <>
      <Formik
        initialValues={{
          username: user.username,
          email: user.email,
          description: user.description ? user.description : '',
        }}
        {...onSubmit}
      >
        <Form className={classes.form}>
          <TextInput
            name="username"
            label="username"
            placeholder={user.username}
            required
            fullWidth
            type="text"
          />
          <TextInput
            name="email"
            label="email"
            placeholder={user.email}
            required
            fullWidth
            type="email"
          />
          <TextInput
            name="description"
            label="description"
            placeholder={user.description}
            required={false}
            fullWidth
            type="text"
            multiline
            rows={4}
          />
        </Form>
      </Formik>
      <Box display="flex" justifyContent="center" flexDirection="row">
        <Button
          className={classes.save}
          color="primary"
          variant="contained"
          type="submit"
          onClick={(): void => setIsEdit(false)}
        >
          Save
        </Button>
        <Button
          className={classes.cancel}
          color="error"
          variant="contained"
          type="submit"
          onClick={(): void => setIsEdit(false)}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default Edit;
