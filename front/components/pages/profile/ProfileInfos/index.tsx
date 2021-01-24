import { Divider, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

import Button from '../../../Button';
import { User } from '../../../../types';
import { useViewer } from '../../../../hooks/auth';

export interface ProfileInfosProps {
  user: User;
}
const useStyles = makeStyles((theme) => ({
  name: {
    display: 'flex',
    marginTop: theme.spacing(3),
    fontSize: 22,
  },
  mail: {
    display: 'flex',
    marginTop: theme.spacing(2),
    fontSize: 18,
  },
  description: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: 16,
    color: theme.palette.grey[600],
  },
  divider: {
    width: '100%',
  },
  nbPackages: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    fontSize: 18,
  },
}));

const ProfileInfos = ({ user }: ProfileInfosProps): JSX.Element => {
  const router = useRouter();
  const classes = useStyles();
  const CheckUser = (): boolean => {
    const viewer = useViewer();
    return viewer && user.email === viewer.email;
  };

  return (
    <>
      <Typography
        variant="subtitle1"
        className={classes.name}
      >
        {user ? user.username : 'error'}
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.mail}
      >
        {user ? user.email : 'error'}
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.description}
      >
        {user ? user.description : 'error'}
      </Typography>
      <Divider className={classes.divider} />
      <Typography
        variant="subtitle1"
        className={classes.nbPackages}
      >
        {!user || !user.packages ? '0' : user.packages.length}
        {' '}
        package
        {user && user.packages && user.packages.length > 1 ? 's ' : ' '}
        uploaded
      </Typography>
      {CheckUser()
        ? (
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            onClick={(): void => {
              router.push('/settings');
            }}
          >
            Edit
          </Button>
        ) : null}

    </>
  );
};

export default ProfileInfos;
