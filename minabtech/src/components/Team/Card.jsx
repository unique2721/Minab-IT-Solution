import React from "react";
import "./Team.css";
const Card = ({
  cardImage,
  cardName,
  cardCareer,
  twitterIcon,
  linkedinIcon,
  browseIcon,
  alt,
}) => {
  return (
    <div className="card">
      <img src={cardImage} alt={alt} />
      <h2>{cardName}</h2>
      <p>{cardCareer}</p>
      <ul>
        <li>
          <a>
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={linkedinIcon} alt="linkeden icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={browseIcon} alt="browse icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Card;
