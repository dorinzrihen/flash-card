import React, { Component } from "react";
import CardInterface from "./component/CardInterface";
import CreateNewForm from "./component/CreateNewForm";
import ExistingForm from "./component/ExistingForm";
import DataService from "./api/DataService";
import Loader from './component/Loader';
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
    let cardQuestions = this.state.existingForms.map((card) => {
      return (
        <CardInterface key={card.id}>
          <ExistingForm className="card-inside"
            id={card.id}
            key={card.id}
            updateCard={this.updateExistCard}
            deleteCard={this.deleteExistCard}
            cardQuestion={card.card_question}
            cardAnswer={card.card_answer}
          />
        </CardInterface>
      );
    });
    cardQuestions.unshift(
      <CardInterface key="newCard">
        <CreateNewForm submitCard={this.submitNewCard} question="" answer="" />
      </CardInterface>
    );
    return cardQuestions;
  };

  submitNewCard = async (data) => {
    await DataService.create(data);
    this.getUpdatedInformation();
  };

  updateExistCard = async (id, data) => {
    await DataService.update(id, data);
    await this.getUpdatedInformation();
  };

  deleteExistCard = async (id) => {
    await DataService.remove(id);
    await this.getUpdatedInformation();
  }

  componentDidMount = async () => {
    this.getUpdatedInformation();
  };

  render() {
    return <div>
      {this.state.existingForms.length > 0 ? <div className="manageCard">{this.renderCards()}</div> : <Loader/>}
</div>
    
    
  }
}

export default ManageCards;
