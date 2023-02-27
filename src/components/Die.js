import React from "react";
import "./Die.css";

function Die({ face, rolling }) {
  return <i className={`die fas fa-dice-${face} ${rolling && "shaking"}`} />;
}

export default Die;
