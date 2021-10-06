import { useContext, useState } from 'react';
import {
  createStyles,
  makeStyles,
  Modal as MuiModal,
  Backdrop,
  Fade,
} from '@material-ui/core';

import { ModalContext } from 'utils/contexts/modalContext';

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    position: 'absolute',
    maxWidth: '800px',
    height: 'auto',
    outline: 0,
  },
  root: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: 'unset',
  },
}));

const getModalStyle = (): Record<string, string> => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const Modal = (): JSX.Element => {
  const classes = useStyles();
  const { modalState, modalDispatch } = useContext(ModalContext);
  const [modalStyle] = useState(getModalStyle);

  return (
    <MuiModal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-describedby="simple-modal-description"
      aria-labelledby="simple-modal-title"
      className={classes.root}
      open={modalState.open}
      closeAfterTransition
      onClose={() => modalDispatch({ open: false, children: <></> })}
    >
      <Fade in={modalState.open}>
        <div className={classes.paper} style={modalStyle}>
          {modalState.children}
        </div>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
