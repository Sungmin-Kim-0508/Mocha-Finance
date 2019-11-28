import React, { Component } from "react";
import PredictPresenter from "./PredictPresenter";
import { expectedPriceApi } from "../../apis/stockApi";
import { connect } from "react-redux";

let msg = "";

class PredictContainer extends Component {
  state = {
    isFuturePricesLoading: false,
    futurePrices: [],
    numDays: 0,
    numData: 0
  };

  async getFuturePrices(symbol, numDays, numData) {
    const { data } = await expectedPriceApi.getFuturePrices(
      symbol,
      numDays,
      numData
    );
    return data;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    });
  };

  submitFuturePrice = async e => {
    e.preventDefault();
    const { symbol } = this.props.stock;
    const { numDays, numData } = this.state;

    if (numDays === 0 || numData === 0) {
      msg = "Put date or data";
    } else {
      this.setState({
        isFuturePricesLoading: true
      });
      msg = "";
      let prices = [];
      try {
        prices = await this.getFuturePrices(symbol, numDays, numData);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({
          futurePrices: prices,
          isFuturePricesLoading: false
        });
      }
    }
  };

  render() {
    const { futurePrices, isFuturePricesLoading } = this.state;
    console.log(msg);
    return (
      <PredictPresenter
        futurePrices={futurePrices}
        msg={msg}
        isFuturePricesLoading={isFuturePricesLoading}
        handleChange={this.handleChange}
        submitFuturePrice={this.submitFuturePrice}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default connect(mapStateToProps)(PredictContainer);
