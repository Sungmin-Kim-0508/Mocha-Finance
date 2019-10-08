import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../api";

class SearchContainer extends Component {
  // async componentDidMount() {
  //   const { data } = await stockApi.historicalPrice("AAPL");
  //   console.log(data);
  // }

  render() {
    return <SearchPresenter />;
  }
}

export default SearchContainer;
