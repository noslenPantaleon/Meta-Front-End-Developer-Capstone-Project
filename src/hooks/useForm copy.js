import React, { useContext, useReducer } from 'react';

const formContext = React.createContext();

const useForm = () => {
  return useContext(formContext);
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  return (
    <formContext.Provider
      value={{
        name: state.name,
        email: state.email,
        date: state.date,
        time: state.time,
        numberOfGuest: state.numberOfGuest,
        occasion: state.occasion,
        message: state.message,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

const INITIAL_STATE = {
  name: '',
  email: '',
  date: '',
  time: [''],
  numberOfGuest: '',
  occasion: '',
  message: '',
};

const ACTION = {
  NAME: 'name',
  EMAIL: 'email',
  DATE: 'date',
  TIME: 'time',
  GUEST: 'numberOfGuest',
  OCCASION: 'ocassion',
  MESSAGE: 'message',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION.NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION.DATE:
      return {
        ...state,
        date: action.payload,
      };

    case ACTION.TIME:
      return {
        ...state,
        time: action.payload,
      };
    case ACTION.GUEST:
      return {
        ...state,
        numberOfGuest: action.payload,
      };
    case ACTION.OCCASION:
      return {
        ...state,
        occasion: action.payload,
      };
    case ACTION.MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      throw new Error();
  }
};

export { FormProvider, useForm, dispatch };
