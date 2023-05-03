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
import { Link } from 'react-router-dom';
import React from "react";

const Footer = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
  };

  return (
    <footer>
      <section className='footerContainer'>
        <ul>
          <img src={logo} alt='logo' />
          <li><Link  to="/" onClick={handleClick("home")}> Home </Link></li>
          <li><Link  to="/#about-section"  onClick={handleClick("about")}>About</Link></li>
          <li ><Link to= "/#menu-section" onClick={handleClick("menu")} >Menu</Link></li>
          <li><Link  to="/Reservations" >Reservations </Link></li>
          <li><Link  to="/orders">Order Online</Link></li>
          <li><Link  to="/login">Login</Link></li>
        </ul>

        <article>
          <h4>Contact</h4>
          <ul>
            <a  href='https://www.google.com/maps/search/++481+Rockwell+Lane+Jackson+Heights,+NY+11372/@40.752511,-73.8936541,15z?hl=es' target="_blank" rel="noreferrer">
              <BiMap size={20} />
              <li>
                481 Rockwell Lane<br></br>
                Jackson Heights, NY 11372
              </li>
            </a>
            <a href='https://web.whatsapp.com/' target="_blank" rel="noreferrer">
              <BsWhatsapp />
              <li>001(5788433)</li>
            </a>
            <a href='https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser' target="_blank" rel="noreferrer">
              <MdOutlineEmail />
              <li>littlelemon@contact.com</li>
            </a>
          </ul>
        </article>
        <article>
          <h4>Social media</h4>
          <ul>
            <a href='https://www.instagram.com/'target="_blank" rel="noreferrer" >
              {<BsInstagram />}
              <li>Instagram</li>
            </a>
            <a href='https://www.linkedin.com/'target="_blank" rel="noreferrer" >
              {<BsLinkedin />}
              <li>Linkedin</li>
            </a>
            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
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
