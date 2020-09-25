import React, { Component } from "react";
import Button from "./Button";
import FormTitle from "./FormTitle";
import FormInput from "./FormInput";

class CreateNewForm extends Component {
  state = {
    card_question: this.props.question,
    card_answer: this.props.answer,
  };

  addClick = () => {
    this.props.submitCard(this.state);
  };

  updateQuestionState = (value) => {
    this.setState({ card_question: value });
  };

  updateAnswerState = (value) => {
    this.setState({ card_answer: value });
  };

  render() {
    return (
      <div>
        <FormTitle text="Question" />
        <FormInput
          ref={this.answerInput}
          update={this.updateQuestionState}
          value={this.state.card_question}
        />
        <FormTitle text="Answer" />
        <FormInput
          update={this.updateAnswerState}
          value={this.state.card_answer}
        />
        <div className="btn">
          <Button
            Button
            isClicked={this.addClick}
            icon={<i className="fas fa-plus"></i>}
          />
        </div>
      </div>
    );
  }
}

CreateNewForm.defaultProps = {
  question: "",
  answer: "",
};

export default CreateNewForm;
