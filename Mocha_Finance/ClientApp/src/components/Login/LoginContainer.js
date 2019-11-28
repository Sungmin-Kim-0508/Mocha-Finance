import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";
import routes from "../../routes";

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
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  componentDidUpdate(prevProps) {
    const { auth } = this.props;
    if (auth.isAuthenticated && auth.user) {
      this.props.history.push(routes.home);
    }
  }

  render() {
    const { msg } = this.props.auth;
    return (
      <LoginPresenter
        msg={msg}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
