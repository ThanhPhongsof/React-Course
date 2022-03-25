import React from "react";
import "./ButtonStyles.scss";

const Button = (props) => {
  return (
    <button className={`button ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
