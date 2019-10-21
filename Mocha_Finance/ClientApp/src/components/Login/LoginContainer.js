import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";

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
    const { email, password } = this.state;

    this.props.login(email, password);
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

const mapStateToProps = state => {};

export default connect(
  null,
  { login }
)(LoginContainer);
