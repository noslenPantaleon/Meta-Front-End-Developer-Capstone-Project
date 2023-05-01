import  React from 'react';
import Testimonials from './Testimonials';
import About from './About';
import Specials from './Specials';
import Hero from './Hero';
import { SPECIALS } from '../constants/specials';
import { ABOUT } from '../constants/about';
import { HERO } from '../constants/hero';
import './styles/main.css';
import { TESTIMONIALS } from '../constants/testimonials';

const Main = () => {

  return (
    <main>
      <section className='heroSection'>
        {HERO.map((hero) => (
          <article key= {hero.id}>
            <Hero
              title={hero.title}
              subtitle={hero.subtitle}
              description={hero.description}
              buttonName={hero.buttonName}
              pict={hero.image}
            />
          </article>
        ))}
      </section>

      <section className='specialsTitle'>
        <h1>This Week Specials!</h1>
        <button className='primayButton'>Online Menu</button>
      </section>

      <section className='specialSection'>
        {SPECIALS.map((special) => (
          <article key={special.id}>
            <Specials
              title={special.title}
              price={special.price}
              description={special.description}
              image={special.image}
            />
          </article>
        ))}
      </section>

      <section className='testimonialSection'>
        {TESTIMONIALS.map((review) => (
          <article key={review.id}>
            <Testimonials
              name={review.name}
              picture={review.image}
              review={review.review}
              starts={review.starts}
            />
          </article>
        ))}
      </section>

      <section id= 'about' className='aboutSection'>
        {ABOUT.map((about) => (
          <article key={about.id}>
            <About
              title={about.title}
              subtitle={about.subtitle}
              description={about.description}
              imageA={about.imageA}
              imageB={about.imageB}
            />
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
