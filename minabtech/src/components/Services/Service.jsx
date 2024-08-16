import React from "react";
import Button from "../Button/Button";
const Service = ({ serviceIcon, serviceTilte, serviceText }) => {
  return (
    <div className="servic">
      <img src={serviceIcon} alt="service icon" />
      <h2>{serviceTilte}</h2>
      <p>{serviceText}</p>
      <Button classes={"btn"} text={"Explore More"} />
    </div>
  );
};

export default Service;
