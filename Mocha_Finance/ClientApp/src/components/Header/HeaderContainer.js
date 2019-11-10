import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  state = {
    isDropListClick: false
  };
  onClickDropList = () => {};
  render() {
    const { auth } = this.props;
    return <HeaderPresenter auth={auth} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(HeaderContainer);
