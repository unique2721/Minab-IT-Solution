import React from "react";
import "./Footer.css";
/* icons */
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import browseIcon from "../../assets/browse.svg";
const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Serivces</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
          <li>
            <a href="">Privacy policy</a>
          </li>
        </ul>
        <div>
          <img src={twitterIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={browseIcon} alt="" />
        </div>
        <p>&copy; 2024 Minab IT Solutions. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
