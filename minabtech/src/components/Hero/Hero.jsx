import React from "react";
import "./Hero.css";
/* images */
import logo from "../../assets/minab_logo.png";
import chatIcon from "../../assets/chat.svg";
/* components */
const Hero = () => {
  return (
    <div className="hero">
      <img src={logo} alt="minab logo" />
      <h1>
        From the cloud to clients, we have all the <span>answers.</span>
      </h1>
      <button>
        Let's discuss <img src={chatIcon} />
      </button>
    </div>
  );
};

export default Hero;
