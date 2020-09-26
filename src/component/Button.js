import React, { Component } from "react";

function Button(props) {
  function clickHandler() {
    props.isClicked();
  }

  return (
    <div>
      <button onClick={clickHandler}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;
