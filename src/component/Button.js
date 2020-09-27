import React from "react";
import "../style/Button.css";

function Button(props) {
  function clickHandler() {
    props.isClicked();
  }

  return (
    <button className="square-btn" onClick={clickHandler}>
      {props.title}
    </button>
  );
}

export default Button;
