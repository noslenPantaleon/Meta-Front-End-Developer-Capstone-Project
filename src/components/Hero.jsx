import React from 'react';
import '../components/styles/hero.css';
import { Link } from "react-router-dom";

const Hero = ({ title, subtitle, description, buttonName, pict }) => {
  return (
    <section className='hero'>
      <article>
        <h1>{title}</h1>
        <h2> {subtitle}</h2>
        <p>{description}</p>
        <Link exact to="/Reservations">
        <button className='primayButton'>{buttonName}</button>
        </Link>
      </article>

      <div>
        <img src={pict} alt='hero' />
      </div>
    </section>
  );
};

export default Hero;
