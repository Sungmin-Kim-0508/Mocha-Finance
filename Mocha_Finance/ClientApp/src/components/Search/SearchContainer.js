import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { connect } from "react-redux";
import { searchStockDetails } from "../../actions/stockActions";
import { withRouter } from "react-router-dom";
import routes from "../../routes";

class SearchContainer extends Component {
  state = {
    keyword: "",
    todayHistorical: [],
    historical: [],
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
    const {
      history: { push }
    } = this.props;
    if (keyword.length !== 0) {
      this.props.searchStockDetails(keyword);
      push(routes.search_result);
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

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default withRouter(
  connect(mapStateToProps, { searchStockDetails })(SearchContainer)
);
