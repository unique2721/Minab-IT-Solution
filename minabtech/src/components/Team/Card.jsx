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
            <img title="twiter" src={twitterIcon} alt="twitter icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img title="linkedin" src={linkedinIcon} alt="linkeden icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img title="web" src={browseIcon} alt="browse icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Card;
