import React, { Component } from "react";
import RegisterPresenter from "./RegisterPresenter";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";

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
    const { email, password1, password2 } = this.state;
    this.props.register(email, password1);
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

export default connect(
  null,
  { register }
)(RegisterContainer);
