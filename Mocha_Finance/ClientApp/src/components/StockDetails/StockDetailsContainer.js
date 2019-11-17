import React, { Component } from "react";
import StockDetailsPresenter from "./StockDetailsPresenter";
import { connect } from "react-redux";

class StockDetailsContainer extends Component {
  render() {
    const {
      myFavourites,
      handleChecked,
      handleAddStockOnFavourite
    } = this.props;
    return (
      <StockDetailsPresenter
        stock={this.props.stock}
        auth={this.props.auth}
        myFavourites={myFavourites}
        handleChecked={handleChecked}
        handleAddStockOnFavourite={handleAddStockOnFavourite}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(StockDetailsContainer);
