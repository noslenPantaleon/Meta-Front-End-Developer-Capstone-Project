import React from 'react';
import logo from '../images/icons_assets/restauranfood.jpg';
import '../App.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>

      <div>
        <img src={logo} alt='logo' width={375} height={325} />
      </div>
    </section>
  );
};

export default Hero;
