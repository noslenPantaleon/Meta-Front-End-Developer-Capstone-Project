import React from 'react';
import BookingForm from '../../components/BookingForm';
import './bookingPage.css';

const BookingPage = () => {

// const updateTimes  =(state, action)=>{

// }



// const initializeTimes = () => {

// }
  return (
    <main className='bookingPageContainer'>
      <h2>Book a table</h2>
       <BookingForm />
    </main>
  
  );
};

export default BookingPage;
