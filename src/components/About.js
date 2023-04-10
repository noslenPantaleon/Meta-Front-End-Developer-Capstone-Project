import React from 'react';
import aboutPictureA from '../images/icons_assets/MarioandAdrianA.jpg';
import aboutPictureB from '../images/icons_assets/MarioandAdrianB.jpg';

const About = () => {
  return (
    <section className='aboutComponent'>
      <div>
        <h1>Little Lemon</h1>
        <h6>Chicago</h6>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div>
        <img src={aboutPictureA} alt='logo' width={276} />
        <img src={aboutPictureB} alt='logo' width={276} />
      </div>
    </section>
  );
};

export default About;
