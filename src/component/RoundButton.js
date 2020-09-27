import React from "react";
import "../style/Button.css";
import "../style/CardInterface.css";

function RoundButton(props) {

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

export default RoundButton;
