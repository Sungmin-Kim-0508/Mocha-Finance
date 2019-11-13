import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../apis/stockApi";
import { connect } from "react-redux";
import { searchTodayStock } from "../../actions/stockActions";
import { withRouter } from "react-router-dom";

class SearchContainer extends Component {
  state = {
    keyword: "",
    todayHistorical: [],
    historical: [],
    isSearch: false
  };

  async componentDidMount() {
    // const { data } = await stockApi.historicalPrice("AAPL");
    // console.log(data);
  }

  handleSearch = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { keyword } = this.state;
    if (keyword.length !== 0) {
      this.props.searchTodayStock(keyword);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.stock.stockInfos !== this.props.stock.stockInfos) {
      const { stockInfos } = this.props.stock;
      console.log(stockInfos[0]);
    }
  }

  render() {
    const { todayHistorical } = this.state;
    console.log(todayHistorical);
    console.log(this.props);

    return (
      <SearchPresenter
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

withRouter(SearchContainer);

export default connect(mapStateToProps, { searchTodayStock })(SearchContainer);
