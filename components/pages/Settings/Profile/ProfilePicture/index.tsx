import React from 'react';
import {
  Button,
  makeStyles, Typography,
} from '@material-ui/core';

import Avatar from 'components/Avatar';

import SettingWrapper from '../../SettingWrapper';
import UpdateButton from '../../UpdateButton';

const useStyles = makeStyles((theme) => ({
  stylePicture: {
    width: '5.5em',
    height: '5.5em',
  },
  containerProfilePicture: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    maxHeight: '90px',
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      width: '100%',
      maxHeight: '300px',
      marginBottom: theme.spacing(2),
    },
  },
  containerPadding: {
    display: 'flex',
    flex: 1,
    paddingLeft: theme.spacing(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      justifyContent: 'space-around',
      flexDirection: 'column',
    },
    alignItems: 'center',
    height: '100%',
  },
  containerUplaod: {
    display: 'flex',
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    height: '90%',
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      flex: 0.7,
    },
  },
  textButton: {
    color: 'white',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  customButton: {
    display: 'flex',
    maxHeight: '36px',
    maxWidth: '180px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '0px',
    },
    minWidth: '120px',
  },
  customPicture: {
    display: 'flex',
    flex: 0.45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    fontWeight: 500,
    opacity: 0.6,
    fontSize: '1.2em',
    color: `${theme.palette.text.primary}`,
  },
}));

function ProfilePicture(): JSX.Element {
  const classes = useStyles();
  const viewer = {
    id: 'string',
    username: 'Alice',
    email: 'alice.dupont@gmail.com',
    description: 'Software developper',
    packages: [],
  };
  const onClick = (): void => (console.log('upload'));

  return (
    <SettingWrapper
      title="Profile Picture :"
      // saveDescription="Save your new picture"
      // onSave={(): void => (console.log('save'))}
    >
      <div className={classes.containerProfilePicture}>
        <div className={classes.containerPadding}>
          <div className={classes.customPicture}>
            <Avatar
              stylePicture={classes.stylePicture}
              user={viewer}
              withName={false}
            />
            <div className={classes.containerUplaod}>
              <Button
                component={Button}
                title="Button"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.customButton}
                onClick={onClick}
              >
                <Typography className={classes.textButton}>
                  Upload Image
                </Typography>
              </Button>
              <Typography className={classes.description}>
                Customize your profile picture
              </Typography>
            </div>
          </div>
          <UpdateButton description="Update your profil" onClick={(): void => (console.log('save'))} />
        </div>
      </div>
    </SettingWrapper>
  );
}

export default ProfilePicture;
