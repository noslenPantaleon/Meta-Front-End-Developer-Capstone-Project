import React from 'react';
import BookingForm from '../../components/BookingForm';
import './bookingPage.css';
import useForm from '../../hooks/useForm';

const BookingPage = () => {

  const {
    timeSlots,
 }=useForm();


  return (
    <main className='bookingPageContainer'>
      <h2>Book a table</h2>
       <BookingForm  availableTime={timeSlots} />
    </main>

  );
};

export default BookingPage;
