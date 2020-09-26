import React, { Component } from "react";
import Button from "./Button";
import FormInfoText from "./FormInfoText";

class RevealAnswer extends Component {
  yesClick = () => {
    this.props.yesClick();
  };

  noClick = () => {
    this.props.noClick();
  };

  render() {
    return (
      <div>
        <FormInfoText text="Did you get it right?" />
        <Button title="yes" isClicked={this.yesClick} />
        <Button title="no" isClicked={this.noClick} />
      </div>
    );
  }
}

export default RevealAnswer;
