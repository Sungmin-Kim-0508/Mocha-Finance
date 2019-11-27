import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

class HeaderContainer extends Component {
  state = {
    isDropListClick: false
  };
  onClickDropList = () => {};

  onLogOut = () => {
    this.props.logout();
    window.location = "/";
  };
  render() {
    const { auth } = this.props;
    return <HeaderPresenter auth={auth} onLogOut={this.onLogOut} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
