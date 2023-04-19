import React from 'react';
import './styles/testimonials.css';
import starts from '../images/icons_assets/5stars.png';

const Testimonials = ({ name, picture, review, stars }) => {
  return (
    <section className='reviewsContainer'>
      <article>
        <div className='pictures'>
          <img src={starts} alt='review' width={100} />
          <img class='avatar' src={picture} alt='review' />
          <h4>{name}</h4>
        </div>
        <p>{review}</p>
      </article>
    </section>
  );
};

export default Testimonials;
