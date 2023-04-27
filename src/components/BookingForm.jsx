import React, {useEffect} from 'react';
import './styles/booking.css';
import {useFormStore} from '../store/formContext';
import useForm from '../hooks/useForm';

const BookingForm = () => {
   const {name, occasion, email, date, time, numberOfGuest, message}= useFormStore();

   useEffect(() => {
      JSON.parse(localStorage.getItem('dataKey'));
    }, []);

   const {
      handleName,
      handleEmail,
      handleDate,
      handleTime,
      handleGuest,
      handleMessage,
      handleFormSubmit,
      handleOccasion,
      timeSlots,
   }=useForm();


  return (
   <>
<form onSubmit={handleFormSubmit} className='bookingContainer' >

   <label htmlFor="name">Name</label >
   <input type="text"
   name="fname"
   id="re-name"
   value={name}
   onChange={ handleName}/>

   <label htmlFor="email">Your Email  </label>
   <input
   value={email}
   onChange={ handleEmail}
   type="email"
   id="email"/>

   <label htmlFor="res-date">Choose Date</label>
   <input
   type="date"
   id="res-date"
   value={date}
   onChange={ handleDate}/>


  <label htmlFor="res-time">Choose Time</label>
   <select
   id="res-time"
   value={time}
   onChange={ handleTime}
   >
   {timeSlots.map((slots, index)=>(
      <option key={index}>
         {slots}
      </option>
   ))};
   </select>

   <label htmlFor="guests">Number of guests</label>
   <input
      type="number"
      placeholder="1"
      min="1"
      max="10"
      value={numberOfGuest}
      onChange={handleGuest}
      id="guests"/>

   <label htmlFor="occasion">Occasion</label>
   <select
   id="occasion"
   value={occasion}
   onChange={handleOccasion}>

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
         value={message}
         onChange={handleMessage}>
   </textarea>

   <div>
   <button className='formButton' >Make Your reservation</button>
   </div>

</form>
   </>
  )
};

export default BookingForm