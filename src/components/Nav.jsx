import logo from '../images/icons_assets/Logo.svg';
import './styles/nav.css';
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const headerRef = useRef(null);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  useEffect(() => {
      let prevScrollPos = window.scrollY;

      const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          const headerElement = headerRef.current;
          if (!headerElement) {
              return;
          }
          if (prevScrollPos > currentScrollPos) {
              headerElement.style.transform = "translateY(0)";
          } else {
              headerElement.style.transform = "translateY(-200px)";
          }
          prevScrollPos = currentScrollPos;
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, []);

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
      <nav ref={headerRef}>
        <Link  to="/">
      <img src={logo} alt='logo' />
        </Link>
      <ul className={active}>
        <li><Link to="/" onClick={handleClick("home")}> Home </Link></li>
        <li><Link to="/#about-section"  onClick={handleClick("about")}>About</Link></li>
        <li><Link to= "/#menu-section" onClick={handleClick("menu")} >Menu</Link></li>
        <li><Link to="/reservations" >Reservations </Link></li>
        <li><Link to="/underconstruction">Order Online</Link></li>
        <li><Link to="/underconstruction">Login</Link></li>
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
