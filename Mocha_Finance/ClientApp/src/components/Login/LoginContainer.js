import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("login!");
  };
  render() {
    const { email, password } = this.state;
    return (
      <LoginPresenter
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;
