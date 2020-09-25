import React, { Component } from "react";
import Button from "./Button";
import FormTitle from "./FormTitle";
import FormInfoText from "./FormInfoText";
import CreateNewForm from "./CreateNewForm";

class ExistingForm extends Component {
  state = {
    updateMode: false,
  };

  updateChange = (value) => {
    this.setState({ updateMode: false }, () => {
      this.props.updateCard(this.props.id, value);
    });
  };

  editClick = () => {
    this.setState({ updateMode: true });
  };

  deleteClick = () => {
    this.props.deleteCard(this.props.id);
  };

  render() {
    //when click on update return new card option
    if (this.state.updateMode) {
      return (
        <div>
          <CreateNewForm
            submitCard={this.updateChange}
            question={this.props.cardQuestion}
            answer={this.props.cardAnswer}
          />
        </div>
      );
    } else {
      return (
        <div>
          <FormTitle text="Question" />
          <FormInfoText text={this.props.cardQuestion} />
          <FormTitle text="Answer" />
          <FormInfoText text={this.props.cardAnswer} />
          <div className="btn">
            <Button
              isClicked={this.editClick}
              icon={<i className="fas fa-edit"></i>}
            />
            <Button
              isClicked={this.deleteClick}
              icon={<i className="fas fa-trash-alt"></i>}
            />
          </div>
        </div>
      );
    }
  }
}

export default ExistingForm;
