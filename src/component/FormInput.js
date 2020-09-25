import { render } from "@testing-library/react";
import React from "react";

class Input extends React.Component {
  state = {
    inputValue:''
  }

  componentDidMount(){
    if(this.props.value){
      this.setState({inputValue:this.props.value})
    }
  }

  updateInfo = (event) => {
    this.setState({inputValue:event.target.value},this.props.update(event.target.value));
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.updateInfo} value={this.state.inputValue} />
      </>
    );
  }
}

export default Input;
