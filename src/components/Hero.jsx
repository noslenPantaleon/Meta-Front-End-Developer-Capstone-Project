import React from 'react';
import '../components/styles/hero.css';

const Hero = ({ title, subtitle, description, buttonName, pict }) => {
  return (
    <section className='hero'>
      <article>
        <h1>{title}</h1>
        <h2> {subtitle}</h2>
        <p>{description}</p>
        <button>{buttonName}</button>
      </article>

      <div>
        <img src={pict} alt='hero' />
      </div>
    </section>
  );
};

export default Hero;
