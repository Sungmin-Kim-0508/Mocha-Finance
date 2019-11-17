import React, { Component } from "react";
import StockDetailsPresenter from "./StockDetailsPresenter";
import { connect } from "react-redux";
import { searchStockDetails } from "../../actions/stockActions";
import { withRouter } from "react-router-dom";

class StockDetailsContainer extends Component {
  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.hasOwnProperty("symbol")) {
      this.props.searchStockDetails(params.symbol);
    }
  }
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

export default withRouter(
  connect(mapStateToProps, { searchStockDetails })(StockDetailsContainer)
);
