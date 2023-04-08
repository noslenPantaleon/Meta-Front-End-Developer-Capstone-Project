import React from 'react';
import logo from '../images/icons_assets/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt='logo' />
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
    </nav>
  );
};

export default Nav;
