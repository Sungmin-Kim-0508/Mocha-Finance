import React, { Component } from "react";
import RegisterPresenter from "./RegisterPresenter";

class RegisterContainer extends Component {
  state = {
    email: "",
    password1: "",
    password2: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <RegisterPresenter
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default RegisterContainer;
