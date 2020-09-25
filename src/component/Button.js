import React, { Component } from "react";
import "../style/Button.css";

function Button(props) {

  function clickHandler() {
    props.isClicked()
  }

  return (
    <div>
      <button className="button" onClick={clickHandler}>
        {props.icon}
      </button>
    </div>
  );
}

export default Button;
