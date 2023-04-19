import logo from '../images/icons_assets/Logo.svg';
import './styles/nav.css';
// import  HamburgerNav from '../components/HamburgerNav';
import React, { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav >
      <img src={logo} alt='logo' />
      <ul className={active}>
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
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};




export default Nav;
