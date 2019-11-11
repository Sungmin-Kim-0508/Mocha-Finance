import React, { Component } from "react";
import RegisterPresenter from "./RegisterPresenter";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import routes from "../../routes";

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
    this.props.register(email, password1, password2);
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
      <RegisterPresenter
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

export default connect(
  mapStateToProps,
  { register }
)(RegisterContainer);
