import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../apis/stockApi";
import { connect } from "react-redux";
import { searchTodayStock } from "../../actions/stockActions";
import { withRouter } from "react-router-dom";
import routes from "../../routes";

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
    const {
      history: { push }
    } = this.props;
    if (keyword.length !== 0) {
      this.props.searchTodayStock(keyword);
      push(routes.search_result);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.stock.stockInfos !== this.props.stock.stockInfos) {
      const { stockInfos } = this.props.stock;
    }
  }

  render() {
    const { todayHistorical } = this.state;

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

export default withRouter(
  connect(mapStateToProps, { searchTodayStock })(SearchContainer)
);
