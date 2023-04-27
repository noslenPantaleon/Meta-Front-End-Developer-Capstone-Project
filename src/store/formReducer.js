const INITIAL_STATE = {
  name: '',
  email: '',
  date: '',
  time: '',
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
  OCCASION: 'occasion',
  MESSAGE: 'message',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION.NAME:
      return {
        ...state,
        name: action.payload,
      };

    case ACTION.EMAIL:
      return {
        ...state,
        email: action.payload,
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

export { ACTION, INITIAL_STATE };

export default formReducer;
