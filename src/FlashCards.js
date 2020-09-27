import React, { Component } from "react";
import CardSideFlip from "./component/CardSideFlip";
import DataService from "./api/DataService";
import Button from "./component/Button";
import FormInfoText from "./component/FormInfoText";
import RevealAnswer from "./component/RevealAnswer";
import "./style/FlashCards.css";

class FlashCards extends Component {
  state = {
    isFlip: false,
    cardQuestionsArr: [],
    currentAnswerScore: 0,
    questionsNumber: 0,
    currentQuestion: "",
    currentAnswer: "",
    index: 0,
  };

  checkIfFinish = () => {
    if (this.state.index + 1 === this.state.questionsNumber) {
      if (this.state.cardQuestionsArr.length > 0) {
        this.setState({ index: 0 });
      } else {
        this.setState({ cardQuestionsArr: [] });
      }
    }
  };

  nextCard = () => {
    this.setState(
      (prevState, props) => ({
        index: prevState.index + 1,
        isFlip: false,
      }),
      () => this.getCurrentCard()
    );
    this.checkIfFinish();
  };

  showCard = () => {
    this.setState({ isFlip: true });
  };

  getCurrentCard = () => {
    const timeout = setTimeout(() => {
      if (this.state.cardQuestionsArr.length > 0) {
        const card = this.state.cardQuestionsArr[this.state.index];
        this.setState({
          currentQuestion: card.card_question,
          currentAnswer: card.card_answer,
        });
      }
    }, 200);
  };

  flipCardClass = () => {
    if (this.state.isFlip) {
      return "is-flipped";
    } else {
      return "";
    }
  };

  componentDidMount = async () => {
    const currentData = await DataService.get();
    this.setState({
      cardQuestionsArr: currentData.data,
      questionsNumber: currentData.data.length,
    });
    this.getCurrentCard();
  };

  correctPick = () => {
    //remove questuion from the list
    let updateArr = this.state.cardQuestionsArr;
    let myScore = this.state.currentAnswerScore + 1;
    updateArr.splice(this.state.index, 1);

    this.setState(
      {
        currentAnswerScore: myScore,
        cardQuestionsArr: updateArr,
        isFlip: false,
      },
      () => this.getCurrentCard(),
      this.checkIfFinish()
    );
  };

  unCorrectPick = () => {
    this.setState({ isFlip: false });
    this.nextCard();
    this.checkIfFinish();
  };

  render() {
    if (this.state.cardQuestionsArr.length > 0) {
      return (
        <div className="flash-cards">
          <CardSideFlip
            front={this.state.currentQuestion}
            back={this.state.currentAnswer}
            flipClass={this.flipCardClass()}
          />
          <div className="btn-place">
            <Button title="New Card" isClicked={this.nextCard} />
            <Button
              title="Reveal Answer"
              isClicked={this.showCard}
              isFlip={this.state.isFlip}
            />
          </div>

          {this.state.isFlip && (
            <RevealAnswer
              yesClick={this.correctPick}
              noClick={this.unCorrectPick}
            />
          )}
          <FormInfoText text="Complited" />
          <FormInfoText
            text={`${this.state.currentAnswerScore} / ${this.state.questionsNumber} `}
          />
        </div>
      );
    } else if (this.state.questionsNumber === 0) {
      return (
        <div className="flash-cards">
          There is no questions! please make some at the Manage Card
        </div>
      );
    } else {
      return <div className="flash-cards">you made it!</div>;
    }
  }
}

export default FlashCards;
