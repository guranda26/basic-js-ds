import React from "react";
import "../../index.css";

const Button = ({ icon, text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
