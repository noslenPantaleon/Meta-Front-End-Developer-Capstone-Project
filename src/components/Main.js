import React from 'react';
import '../App.css';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Specials from './Specials';
import Hero from './Hero';

const Main = () => {
  {
    /* <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes> */
  }

  return (
    <main>
      <section className='hero'>
        <Hero />
      </section>
      <section className='specials'>
        <Specials />
      </section>

      <section className='testimonials'>
        <Testimonials />
      </section>

      <section className='about'>
        <About />
      </section>
    </main>
  );
};

export default Main;
