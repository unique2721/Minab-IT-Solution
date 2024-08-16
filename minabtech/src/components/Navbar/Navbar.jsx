import React, { useEffect, useRef, useState } from "react";
/* styleshetes */
import "./Navbar.css";
/* images */
import minab_logo from "../../assets/minab_logo.png";
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      if (scrollTop > 100) {
        navRef.current.style.backgroundColor = "rgba(245, 245, 245, 0.934)";
      }
    });
  }, []);

  return (
    <nav ref={navRef}>
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
