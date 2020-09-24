import React, { Component } from 'react';
import "../style/CardInterface.css";

class CardInterface extends Component {
    render() {
        return (
            <div className="CardInterface">
                {this.props.children}
            </div>
        );
    }
}

export default CardInterface;