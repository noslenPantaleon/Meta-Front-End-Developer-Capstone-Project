import React from 'react';
import './styles/specials.css';
import IconMoto from '../images/icons_assets/moto_icon.svg';

const Specials = ({ title, price, image, description }) => {
  return (
    <>
      <section className='cardContainer'>
        <article>
          <img src={image} alt='specials' width={280} height={200} />
          <div className='title'>
            <h2>{title}</h2>
            <h3>{price}</h3>
          </div>
          <p>{description}</p>
          <div className='order'>
            <h6>
              <a href='./'>Order Delivery</a>
            </h6>
            <img src={IconMoto} alt='specials' width={20} />
          </div>
        </article>
      </section>
    </>
  );
};

export default Specials;
