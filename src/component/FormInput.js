import React, { Component } from "react";

function Input(props) {
  function updateInfo(event){
    props.update(event)
  }

  return (
    <>
      <input type="text" onChange={updateInfo} />
    </>
  );
}

export default Input;
