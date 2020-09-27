import React, { Component } from "react";
import Button from "./Button";
import FormInfoText from "./FormInfoText";
import "../style/FlashCards.css";

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
        <div className="btn-place">
          <Button title="yes" isClicked={this.yesClick} />
          <Button title="no" isClicked={this.noClick} />
        </div>
      </div>
    );
  }
}

export default RevealAnswer;
