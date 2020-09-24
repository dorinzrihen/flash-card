import React, { Component } from 'react';
import CardInterface from './component/CardInterface';
import CreateNewForm from './component/CreateNewForm';
import "./style/ManageCards.css";

class ManageCards extends Component {
    render() {
        return (
            <div className="manageCard">
                <CardInterface>
                    <CreateNewForm/>
                </CardInterface>
  
            </div>
        );
    }
}

export default ManageCards;