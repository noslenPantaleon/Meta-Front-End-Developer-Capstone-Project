import React, { useReducer, useContext } from 'react';
import FormReducer, { INITIAL_STATE } from './formReducer';

const formContext = React.createContext();
const useFormStore = () => useContext(formContext)[0];
const useFormDispatch = () => useContext(formContext)[1];

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  return (
    <formContext.Provider value={[state, dispatch]}>
      {children}
    </formContext.Provider>
  );
};

export default FormProvider;
export { formContext, useFormStore, useFormDispatch };
