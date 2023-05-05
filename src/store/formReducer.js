const storedName = JSON.parse(localStorage.getItem('dataKey'))[0];
const storedEmail = JSON.parse(localStorage.getItem('dataKey'))[1];
const storedDate = JSON.parse(localStorage.getItem('dataKey'))[2];
const storedTime = JSON.parse(localStorage.getItem('dataKey'))[3];
const storedGuest = JSON.parse(localStorage.getItem('dataKey'))[4];
const storedOcassion = JSON.parse(localStorage.getItem('dataKey'))[5];
const storedMessage = JSON.parse(localStorage.getItem('dataKey'))[6];

const INITIAL_STATE = {
  name: storedName ? storedName : '',
  email: storedEmail ? storedEmail : '',
  date: storedDate ? storedDate : '',
  time: storedTime ? storedTime : '',
  numberOfGuest: storedGuest ? storedGuest : '',
  occasion: storedOcassion ? storedOcassion : '',
  message: storedMessage ? storedMessage : '',
};

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   date: '',
//   time: '',
//   numberOfGuest: '',
//   occasion: '',
//   message: '',
// };

const ACTION = {
  NAME: 'name',
  EMAIL: 'email',
  DATE: 'date',
  TIME: 'time',
  GUEST: 'numberOfGuest',
  OCCASION: 'occasion',
  MESSAGE: 'message',
};

const FormReducer = (state, action) => {
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

export default FormReducer;
