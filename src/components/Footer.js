import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      {/* <img src={picture} alt='picture' /> */}
      <ul>
        <li>
          <a href='./'>Home </a>
        </li>
        <li>
          <a href='./about'>About </a>
        </li>
        <li>
          <a href='./Menu'>Menu </a>
        </li>
        <li>
          <a href='./reservations'>Reservations </a>
        </li>
        <li>
          <a href='./Orders'> Order Online </a>
        </li>
        <li>
          <a href='./login'>login </a>
        </li>
      </ul>

      <section class='contactSection'>
        <article>
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </article>
        <article>
          <h4>Social media</h4>
          <ul>
            <a href='./'>
              <li>Instagram</li>
            </a>
            <a href='./'>
              <li>Linkedin</li>
            </a>
            <a href='./'>
              <li>FaceBook</li>
            </a>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
