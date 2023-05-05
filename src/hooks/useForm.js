import { fetchAPI, submitAPI } from '../services/api';
import { ACTION } from '../store/formReducer';
import { useFormDispatch } from '../store/formContext';
import { useEffect, useState } from 'react';

const useForm = () => {
  useEffect(() => {
    const today = new Date(Date.now());
    setTimeSlots(['']);
    setTimeSlots(fetchAPI(new Date(today)));
  }, []);

  //use this to get state from reducer without global context
  // const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  // const formState = useContext(formContext);
  // const state = formState[0] ?? '';
  // const dispatch = formState[1] ?? '';

  const dispatch = useFormDispatch();
  const [timeSlots, setTimeSlots] = useState(['']);

  const initializeTimes = (e) => {
    setTimeSlots(fetchAPI(new Date(e)));
  };

  const handleName = (e) => {
    dispatch({ type: ACTION.NAME, payload: e.target.value });
  };

  const handleEmail = (e) => {
    dispatch({ type: ACTION.EMAIL, payload: e.target.value });
  };
  const handleDate = (e) => {
    dispatch({ type: ACTION.DATE, payload: e.target.value });
    initializeTimes(e.target.value);
  };

  const handleTime = (e) => {
    dispatch({ type: ACTION.TIME, payload: e.target.value });
    // setTimeSlots([...timeSlots].filter((time) => time !== e.target.value));
    // console.log('handle times', timeSlots);
  };

  const handleGuest = (e) => {
    dispatch({ type: ACTION.GUEST, payload: e.target.value });
  };

  const handleOccasion = (e) => {
    dispatch({ type: ACTION.OCCASION, payload: e.target.value });
  };
  const handleMessage = (e) => {
    dispatch({ type: ACTION.MESSAGE, payload: e.target.value });
  };

  const handleSubmit = (values) => {
    submitAPI(values);
    setTimeSlots(['']);
    dispatch({ type: ACTION.DATE, payload: '' });
    dispatch({ type: ACTION.TIME, payload: '' });
    dispatch({ type: ACTION.NAME, payload: '' });
    dispatch({ type: ACTION.EMAIL, payload: '' });
    dispatch({ type: ACTION.OCCASION, payload: '' });
    dispatch({ type: ACTION.GUEST, payload: '' });
    dispatch({ type: ACTION.MESSAGE, payload: '' });
  };

  return {
    handleDate,
    handleTime,
    handleSubmit,
    handleName,
    handleEmail,
    handleGuest,
    handleMessage,
    handleOccasion,
    timeSlots,
    // state,
    // dispatch,
  };
};

export default useForm;
