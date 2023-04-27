import { fetchAPI, submitAPI } from '../services/api';
import { useFormStore, useFormDispatch } from '../store/formContext';
import { ACTION } from '../store/formReducer';
import { useEffect, useState } from 'react';

const useForm = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeSlots(fetchAPI(new Date(Date.now())));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'dataKey',
      JSON.stringify([
        {
          name,
          occasion,
          email,
          date,
          time,
          numberOfGuest,
          message,
        },
      ])
    );
  }, [data]);

  const {
    name,
    occasion,
    email,
    date,
    time,
    numberOfGuest,
    message,
  } = useFormStore();
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
  };
  const handleGuest = (e) => {
    dispatch({ type: ACTION.GUEST, payload: e.target.value });
  };

  const handleMessage = (e) => {
    dispatch({ type: ACTION.MESSAGE, payload: e.target.value });
  };

  const handleOccasion = (e) => {
    dispatch({ type: ACTION.OCCASION, payload: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData({
      name,
      occasion,
      email,
      date,
      time,
      numberOfGuest,
      message,
    });

    submitAPI([
      {
        name,
        occasion,
        email,
        date,
        time,
        numberOfGuest,
        message,
      },
    ]);
  };

  return {
    handleName,
    handleEmail,
    handleDate,
    handleTime,
    handleGuest,
    handleMessage,
    handleFormSubmit,
    handleOccasion,
    timeSlots,
  };
};

export default useForm;
