import React, { Component } from "react";
import CardInterface from "./component/CardInterface";
import CreateNewForm from "./component/CreateNewForm";
import ExistingForm from "./component/ExistingForm";
import CrudApiConnect from "./api/CrudApiConnect";
import DataService from "./api/DataService";
import "./style/ManageCards.css";

class ManageCards extends Component {
  state = {
    existingForms: [],
  };

  getUpdatedInformation = async () => {
    const currentData = await DataService.get();
    this.setState({ existingForms: currentData.data });
  };

  renderCards = () => {
    const cardQuestions = this.state.existingForms.map(
      (card) => {
        return (
            <CardInterface key={card.id}>
                <ExistingForm cardQuestion={card.card_question} cardAnswer={card.card_answer}/>
            </CardInterface>
          )
      }
    );
    return cardQuestions;
  };

  submitNewCard = async (data) => {
    await DataService.create(data);
    this.getUpdatedInformation();
  }

  componentDidMount = async () => {
    this.getUpdatedInformation();
  };

  render() {
    return (
      <div className="manageCard">
        <CardInterface>
          <CreateNewForm submitNewCard={this.submitNewCard}/>
        </CardInterface>
        {this.renderCards()}
      </div>
    );
  }
}

export default ManageCards;
