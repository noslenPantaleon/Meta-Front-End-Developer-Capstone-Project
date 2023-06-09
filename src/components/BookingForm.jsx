import React, {useEffect, useState} from 'react';
import './styles/booking.css';
import useForm from '../hooks/useForm';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {useFormStore} from '../store/formContext';

const BookingForm = ({availableTime}) => {

   // const {state}= useForm();
   // const{name}= state.name;
   // const{email}= state.email;
   // const{time}= state.time;
   // const{occasion}= state.occasion;
   // const{numberOfGuest }= state.numberOfGuest;
   // const{message}= state.message;
   // const{date}= state.date;
   const {name, email, date, time, numberOfGuest, occasion, message }= useFormStore();
   const availableSlots= Object.values(availableTime)
   const [isloading, setIsloading]= useState(false)
   const navigate = useNavigate();

   useEffect(() => {
      localStorage.setItem('dataKey', JSON.stringify([name, email, date, time, numberOfGuest, occasion, message]));
    }, [name, email, date, time, numberOfGuest, occasion, message]);

    const onhandleName=(e)=>{
      formik.handleChange(e);
      handleName(e);
    }

    const onhandleEmail=(e)=>{
      formik.handleChange(e);
      handleEmail(e);
    }

   const onChangeDate=(e) => {
      formik.handleChange(e);
      handleDate(e);
    }

    const onChangeTime=(e) => {
      formik.handleChange(e);
      handleTime(e);
    }

    const onhandleGuest=(e)=>{
      formik.handleChange(e);
      handleGuest(e);
    }

    const onhandleOcassion=(e)=>{
      formik.handleChange(e);
      handleOccasion(e);
    }

    const onhandleMessage=(e)=>{
      formik.handleChange(e);
      handleMessage(e);
    }

   const {
      handleName,
      handleEmail,
      handleGuest,
      handleMessage,
      handleOccasion,
      handleDate,
      handleTime,
      handleSubmit,
   }=useForm();

   const formik = useFormik({
      initialValues: {
         name,
         email,
         date,
         time,
         numberOfGuest,
         occasion,
         message,
     },
     onSubmit: (values, actions,) => {
      setIsloading(true)
      setTimeout(() =>handleSubmit(values), 3000);
      setTimeout(() =>navigate('/confirmation'), 1000);
      actions.resetForm();
    },

      validationSchema: Yup.object({
         name: Yup.string().required("Required name"),
         email: Yup.string().email("Invalid email address").required("Required email"),
         date: Yup.date().typeError("Please enter a valid date, format: MM/DD/YYYY").required("Date is a requiered field"),
         time: Yup.string().required('please choose the available time'),
         numberOfGuest: Yup.number()
         .typeError("Please enter a valid number")
         .required("Guests number is required")
         .min(1, "Number of Guests at least 1")
         .max(10, "Maximum number of Guests is 10"),
         occasion:Yup.string()
         .required()
         .oneOf(["birthday", "engagement", "anniversary"])
         .label("occasion"),
         message: Yup.string().min(25, "Must be at least 25 characters"),
      }),
  });

  return (
   <>
<form onSubmit= {(e) => {e.preventDefault(); formik.handleSubmit(e)}} className='bookingContainer' >

   <label htmlFor="name">Name</label >
   <input type="text"
   name="name"
   id="name"
   value={name}
   onBlur= {formik.handleBlur}
   onChange={onhandleName}/>
   {formik.errors.name && formik.touched.name && <p className="error"> {formik.errors.name}</p>}

   <label htmlFor="email">Your Email  </label>
   <input
   type="email"
   id="email"
   onBlur= {formik.handleBlur}
   onChange={onhandleEmail}
   value={email}/>

   {formik.errors.email && formik.touched.email && <p className="error"> {formik.errors.email}</p>}

   <label htmlFor="date">Choose Date</label>
   <input
   name= "date"
   type="date"
   id="date"
   value={date}
   onBlur= {formik.handleBlur}
   onChange={onChangeDate} />
   {formik.errors.date && formik.touched.date && <p className="error"> {formik.errors.date}</p>}


  <label htmlFor="time">Choose Time</label>
   <select
   id="time"
   name= "time"
   value={time}
   onBlur= {formik.handleBlur}
   onChange={onChangeTime}>
   <option>
   Please choose first the date
   </option>
   {availableSlots?.map((slots, index)=>(
      <option key={index}>
         {slots}
      </option>
   ))};
   </select>
   {formik.errors.time && formik.touched.time && <p className="error"> {formik.errors.time}</p>}


   <label htmlFor="guests">Number of guests</label>
   <input
      type="number"
      placeholder="0"
      name="numberOfGuest"
      id="guests"
      value={numberOfGuest}
      onBlur= {formik.handleBlur}
      onChange={onhandleGuest}/>
      {formik.errors.numberOfGuest && formik.touched.numberOfGuest && <p className="error"> {formik.errors.numberOfGuest}</p>}


   <label htmlFor="occasion">Occasion</label>
   <select
   id="occasion"
   name="occasion"
   value={occasion}
   onBlur= {formik.handleBlur}
   onChange={onhandleOcassion}>
   <option value="Select one">Select one</option>
   <option value="birthday">Birthday</option>
   <option value="engagement">Engagement</option>
   <option value="anniversary">Anniversary</option>
   </select>
   {formik.errors.occasion && formik.touched.occasion && <p className="error"> {formik.errors.occasion}</p>}


   <label htmlFor="message">Additional requests  </label>
   <textarea
         name="message"
         id="message"
         cols="30"
         rows="10"
         value={message}
         onChange={onhandleMessage}>
   </textarea>
         {formik.errors.message && formik.touched.message && <p className="error"> {formik.errors.message}</p>}

   <div>
      {isloading? <span className='loader'></span>:<button name ='submit'type='submit' className='formButton' aria-label="On Click"  >Make Your reservation</button>}

   </div>

</form>
   </>
  )
};

export default BookingForm