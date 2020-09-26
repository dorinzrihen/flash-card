import React, { Component } from "react";
import "../style/CardSideFlip.css";

class CardSideFlip extends Component {
  render() {
    return (
      <div className="scene scene--card">
        <div className={`card ${this.props.flipClass}`}>
          <div className="card__face card__face--front">{this.props.front}</div>
          <div className="card__face card__face--back">{this.props.back}</div>
        </div>
      </div>
    );
  }
}

export default CardSideFlip;
