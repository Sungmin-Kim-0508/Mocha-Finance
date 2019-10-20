import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  state = {
    isDropListClick: false
  };
  onClickDropList = () => {};
  render() {
    return <HeaderPresenter />;
  }
}

export default HeaderContainer;
