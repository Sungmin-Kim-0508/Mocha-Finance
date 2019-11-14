import React, { Component } from "react";
import StockDetailsPresenter from "./StockDetailsPresenter";
import { connect } from "react-redux";

class StockDetailsContainer extends Component {
  render() {
    console.log(this.props.stock);
    return <StockDetailsPresenter />;
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default connect(mapStateToProps)(StockDetailsContainer);
