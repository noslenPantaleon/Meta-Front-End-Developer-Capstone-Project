import React from 'react';
import '../components/styles/footer.css';
import logo from '../images/icons_assets/Logo.svg';
import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsWhatsapp,
} from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <section className='footerContainer'>
        <ul>
          <img src={logo} alt='logo' />
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

        <article>
          <h4>Contact</h4>
          <ul>
            <a>
              <BiMap size={20} />
              <li>
                481 Rockwell Lane<br></br>
                Jackson Heights, NY 11372
              </li>
            </a>
            <a>
              <BsWhatsapp />
              <li>001(5788433)</li>
            </a>
            <a>
              <MdOutlineEmail />
              <li>littlelemon@contact.com</li>
            </a>
          </ul>
        </article>
        <article>
          <h4>Social media</h4>
          <ul>
            <a href='./'>
              {<BsInstagram />}
              <li>Instagram</li>
            </a>
            <a href='./'>
              {<BsLinkedin />}
              <li>Linkedin</li>
            </a>
            <a href='./'>
              <BsFacebook />
              <li>FaceBook</li>
            </a>
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
