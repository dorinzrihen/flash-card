import React, { Component } from "react";
import Button from "./Button";
import FormTitle from "./FormTitle";
import FormInput from "./FormInput";

class CreateNewForm extends Component {
  state = {
    card_question: "",
    card_answer: "",
  };

  addClick = () => {
    this.props.submitNewCard(this.state)
  }

  updateQuestionState = (event) =>{
    const value = event.target.value;
    this.setState({ card_question: value });
  }

  updateAnswerState = (event) => {
    const value = event.target.value;
    this.setState({ card_answer: value });
  }

  render() {
    return (
      <div>
        <FormTitle text="Question" />
        <FormInput update={this.updateQuestionState} />
        <FormTitle text="Answer" />
        <FormInput update={this.updateAnswerState} />
        <Button
          Button
          isClicked={this.addClick}
          icon={<i className="fas fa-plus"></i>}
        />
      </div>
    );
  }
}

export default CreateNewForm;
