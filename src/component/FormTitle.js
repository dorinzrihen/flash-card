import React, { Component } from 'react';

class CardTitle extends Component {
    render() {
        return (
            <>
               <h2>{this.props.text}</h2> 
            </>
        );
    }
}

export default CardTitle;