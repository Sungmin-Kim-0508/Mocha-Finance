import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../apis/stockApi";

class SearchContainer extends Component {
  // async componentDidMount() {
  //   const { data } = await stockApi.historicalPrice("AAPL");
  //   console.log(data);
  // }
  state = {
    keyword: "",
    isSearch: false
  };

  handleSearch = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { keyword } = this.state;
    if (keyword.length !== 0) {
      console.log("Submit!");
    }
  };

  render() {
    return (
      <SearchPresenter
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;
