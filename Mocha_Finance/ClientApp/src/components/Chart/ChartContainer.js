import React, { Component } from "react";
import ChartPresenter from "./ChartPresenter";
import { stockApi } from "../../apis/stockApi";
import { parsingData } from "./parsingData";
import { max } from "d3-array";

let stock_data = null;

class ChartContainer extends Component {
  state = {
    lastCount: 0,
    g: null,
    historical: [],
    data: []
  };

  handleDateRange = e => {
    const { data } = this.state;
    const dateMax = max(data, d => d.date);
    if (e.target.name === "5y") {
      this.setState({
        data: stock_data.filter(item => {
          // Get the latest year.
          const yearMax = dateMax.getFullYear();
          // Get stock data within 5 year.
          return item.date.getFullYear() >= yearMax - 5;
        })
      });
    } else if (e.target.name === "1y") {
      this.setState({
        data: stock_data.filter(item => {
          const yearMax = dateMax.getFullYear();
          return item.date.getFullYear() >= yearMax - 1;
        })
      });
    } else if (e.target.name === "6m") {
      this.setState({
        data: stock_data.filter(item => {
          const monthMax = dateMax.getMonth();
          return (
            item.date.getFullYear() === new Date().getFullYear() &&
            item.date.getMonth() >= monthMax - 6
          );
        })
      });
    }
  };

  fetchData = async () => {
    const { symbol } = this.props;
    const {
      data: { historical }
    } = await stockApi.historicalPrice(symbol);
    const historicalData = parsingData(historical);
    stock_data = historicalData;
    this.setState({
      data: historicalData
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;
    return (
      <ChartPresenter data={data} handleDateRange={this.handleDateRange} />
    );
  }
}

export default ChartContainer;
