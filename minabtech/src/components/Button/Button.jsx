import React from "react";
import "./Button.css";
const Button = ({ text, classes }) => {
  return <button className={classes}>{text}</button>;
};

export default Button;
