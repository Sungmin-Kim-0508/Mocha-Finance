import React, { Component } from "react";
import StockDetailsPresenter from "./StockDetailsPresenter";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class StockDetailsContainer extends Component {
  render() {
    const {
      match,
      myFavourites,
      handleChecked,
      handleAddStockOnFavourite
    } = this.props;
    return (
      <StockDetailsPresenter
        stock={this.props.stock}
        auth={this.props.auth}
        match={match}
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

export default withRouter(connect(mapStateToProps)(StockDetailsContainer));
