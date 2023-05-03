import React from 'react'
import icon from '../../images/icons_assets/success.svg';
import './confirmation.css';

const Confirmation = () => {
  return (
    <main  className='successContainer'>
      <div className='confirm'>
     <img src={icon} alt='confirmation'/>
     <h4>Please check your email</h4>
      </div>
     <h4>Can’t get an email? <span>Resumit</span> </h4>
     <button className='successButton'>Check your Email</button>
    </main>
  )
}

export default Confirmation