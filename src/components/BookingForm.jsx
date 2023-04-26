import React from 'react';
import './styles/booking.css';
import {useFormStore,useFormDispatch} from '../store/formContext';
import { ACTION} from '../store/formReducer';

const BookingForm = () => {
   const {name, ocassion, email, date, time, numberOfGuest, message}= useFormStore();
   const dispatch= useFormDispatch();

   const handleFormSubmit = e => {
      e.preventDefault();
      //   submitData({ date, time, numberOfGuests, occasion, });
      };

  return (
   <>
<form onSubmit={handleFormSubmit} className='bookingContainer' >

<label htmlFor="name">Name</label >
<input type="text"
 name="fname"
 id="re-name"
 value={name}
 onChange={ (e) => dispatch({type:ACTION.NAME, payload: e.target.value,})}/>

<label htmlFor="email">Your Email  </label>
          <input
            value={email}
            onChange={ (e) => dispatch({type:ACTION.EMAIL, payload: e.target.value,})}
            type="email"
            id="email"/>

   <label htmlFor="res-time">Choose date</label>
   <input
   type="date"
   id="res-date"
   value={date}/>
  <label htmlFor="res-time">Choose Time</label>
   <select
   id="res-time"
   value={time}
   onChange={ (e) =>  dispatch({type: ACTION.DATE, payload: e.target.value})}
   >

   <option>{time}</option>
   </select>

   <label htmlFor="guests">Number of guests</label>
   <input
      type="number"
      placeholder="1"
      min="1"
      max="10"
      // onChange={ (e) =>  dispatch({type: ACTION.GUEST, payload: e.target.value})}
      id="guests"/>

   <label htmlFor="occasion">Occasion</label>
   <select
   id="occasion"
   value={ocassion}
   onChange={(e)=>dispatch({type:ACTION.OCCASION, payload: e.target.value})}
   >
           <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
   </select>

   <label htmlFor="message">Additional requests  </label>
   <textarea
         name="message"
         id="message"
         cols="30"
         rows="10"
         required
         value={message}
         onChange={(e)=>dispatch({type:ACTION.MESSAGE, payload: e.target.value})}>

          </textarea>

   <div>
   <button className='formButton' >Make Your reservation</button>
   </div>

</form>
   </>
  )
};

export default BookingForm