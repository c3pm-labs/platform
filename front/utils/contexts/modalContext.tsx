import { createContext, Dispatch, useReducer } from 'react';

type ModalState = {
  open: boolean;
  children: React.ReactElement;
};

type ContextType = {
  modalState: ModalState;
  modalDispatch: Dispatch<Partial<ModalState>>;
};

type Children = { children: React.ReactNode };

const defaultValue = {
  modalState: { open: false, children: <></> },
  modalDispatch: () => null,
};

export const ModalContext = createContext<ContextType>(defaultValue);

export const ModalProvider = ({ children }: Children): JSX.Element => {
  const [modalState, modalDispatch] = useReducer<
  React.Reducer<ModalState, Partial<ModalState>>
  >(
    (state, action) => ({ ...state, ...action }),
    {
      open: false,
      children: <></>,
    },
  );

  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
