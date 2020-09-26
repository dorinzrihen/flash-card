import React, { Component } from "react";
import CardSideFlip from "./component/CardSideFlip";
import DataService from "./api/DataService";
import Button from "./component/Button";
import FormInfoText from "./component/FormInfoText";
import RevealAnswer from "./component/RevealAnswer";

class FlashCards extends Component {
  state = {
    isFlip: false,
    cardQuestionsArr: [],
    currentAnswerScore: 0,
    questionsNumber: 0,
    currentQuestion: "",
    currentAnswer: "",
    flipClass: "",
    index: 0,
  };

  nextCard = () => {
    this.setState(
      (prevState, props) => ({
        index: prevState.index + 1,
        isFlip: false,
      }),
      () => this.getCurrentCard()
    );
  };

  showCard = () => {
    this.setState({ isFlip: true });
  };

  getCurrentCard = () => {
    const card = this.state.cardQuestionsArr[this.state.index];
    this.setState({
      currentQuestion: card.card_question,
      currentAnswer: card.card_answer,
    });
  };

  flipCardClass() {
    if (this.state.isFlip) {
      return "is-flipped";
    } else {
      return "";
    }
  }

  componentDidMount = async () => {
    const currentData = await DataService.get();
    this.setState({
      cardQuestionsArr: currentData.data,
      questionsNumber: currentData.data.length,
    });
    this.getCurrentCard();
  };

  currectPick = () => {
    this.setState(
        (prevState, props) => ({
            currentAnswerScore: prevState.currentAnswerScore + 1,
          isFlip: false,
        }),
      );
  };

  unCurrectPick = () => {
    this.setState({ isFlip: false });
  };

  render() {
    if (this.state.cardQuestionsArr.length > 0) {
      return (
        <div>
          <CardSideFlip
            front={this.state.currentQuestion}
            back={this.state.currentAnswer}
            flipClass={this.flipCardClass()}
          />
          <Button title="New Card" isClicked={this.nextCard} />
          <Button
            title="Reveal Answer"
            isClicked={this.showCard}
            isFlip={this.state.isFlip}
          />
          {this.state.isFlip && (
            <RevealAnswer
              yesClick={this.currectPick}
              noClick={this.unCurrectPick}
            />
          )}
          <FormInfoText text="Complited" />
          <FormInfoText
            text={`${this.state.currentAnswerScore} / ${this.state.questionsNumber} `}
          />
        </div>
      );
    }
    else if(this.state.questionsNumber === 0){
        return(
            <div>There is no questions! please make some at the Manage Card</div>
        )
    }
    else{
        return (
            <div>you made it!</div>
        )
    }
  }
}

export default FlashCards;
