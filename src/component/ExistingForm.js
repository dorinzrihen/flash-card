import React, { Component } from "react";
import Button from "./Button";
import FormTitle from "./FormTitle";
import FormInfoText from "./FormInfoText";

class ExistingForm extends Component {

  editClick(event) {
      console.log('edit');
  }

  deleteClick(event) {
    console.log('delete');
}

render(){
    return (
        <div>
          <FormTitle text="Question" />
          <FormInfoText text={this.props.cardQuestion} />
          <FormTitle text="Answer" />
          <FormInfoText text={this.props.cardAnswer} />
          <Button
            isClicked={this.editClick}
            icon={<i class="fas fa-edit"></i>}
          />
          <Button
            isClicked={this.deleteClick}
            icon={<i class="fas fa-trash-alt"></i>}
          />
        </div>
      );
}
 
}

export default ExistingForm;
