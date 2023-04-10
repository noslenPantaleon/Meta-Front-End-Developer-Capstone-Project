import React from 'react';
import '../App.css';
import greekSalad from '../images/icons_assets/greek salad.jpg';
import bruchetta from '../images/icons_assets/bruchetta.svg';
import dessert from '../images/icons_assets/lemon dessert.jpg';

const Specials = () => {
  return (
    <section>
      <div className='specialsTitle'>
        <h1>This Week Specials!</h1>
        <button>Order Menu</button>
      </div>
      <section className='cardComponent'>
        <article className='card'>
          <img src={greekSalad} alt='specials image' width={264} height={185} />
          <div className='specialsTitle'>
            <h2>Bruchetta</h2>
            <h4>$12.90</h4>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <h6>
            <a>Order Delivery</a>
          </h6>
        </article>

        <article className='card'>
          <img src={bruchetta} alt='specials image' width={264} height={185} />
          <div className='specialsTitle'>
            <h2>Lemon Dessert</h2>
            <h4>$12.90</h4>
          </div>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <h6>
            <a>Order Delivery</a>
          </h6>
        </article>

        <article className='card'>
          <img src={dessert} alt='specials image' width={264} height={185} />
          <div className='specialsTitle'>
            <h2>Greek Salad</h2>
            <h4>$12.90</h4>
          </div>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <h6>
            <a>Order Delivery</a>
          </h6>
        </article>
      </section>
    </section>
  );
};

export default Specials;
