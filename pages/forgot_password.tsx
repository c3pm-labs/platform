import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import withApollo from 'utils/withApollo';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Head from 'components/Head';

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    minWidth: 175,
    fontSize: 24,
  },
}));

function ForgotPassword(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Head title="c3pm - login" />
      <Typography
        variant="subtitle1"
        className={classes.text}
      >
        Password forgotten
      </Typography>
    </>
  );
}

export default withApollo(ForgotPassword);
