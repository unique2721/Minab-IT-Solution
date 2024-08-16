import React from "react";
/* styleshetes */
import "./Navbar.css";
/* images */
import minab_logo from "../../assets/minab_logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={minab_logo} alt="minab logo" className="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/teams">Teams</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/partners">Partners</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <div>
          <a href="">
            <img className="dark-theme" src="" alt="dark theme" />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
