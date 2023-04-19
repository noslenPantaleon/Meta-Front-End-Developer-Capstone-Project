import React from 'react';
import './styles/about.css';

const About = ({ title, subtitle, description, imageA, imageB }) => {
  return (
    <section className='aboutContainer'>
      <div>
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
        <p>{description}</p>
      </div>
      <figcaption>
        <img src={imageA} alt='about-image1' width={276} />
      </figcaption>
      <div>
        <img src={imageB} alt='about-image2' width={276} />
      </div>
    </section>
  );
};

export default About;
