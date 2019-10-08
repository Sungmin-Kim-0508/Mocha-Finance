import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { connect } from "react-redux";
import { searchStock } from "../../actions/stockActions";

class HomeContainer extends Component {
  state = {
    keyword: "",
    stockInfos: [],
    isSearch: false,
    isLoading: false,
    error: ""
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
      this.props.searchStock(keyword);
    }
  };

  render() {
    const { stockInfos, isSearch, isLoading } = this.props.stock;
    const { error } = this.props.error;
    return (
      <HomePresenter
        stockInfos={stockInfos}
        isSearch={isSearch}
        isLoading={isLoading}
        error={error}
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { searchStock }
)(HomeContainer);
