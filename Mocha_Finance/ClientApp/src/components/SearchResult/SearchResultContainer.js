import React, { Component } from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { connect } from "react-redux";
import {
  addStockOnMyFavourite,
  getFuturePrices
} from "../../actions/stockActions";
import { getAllFavourites } from "../../actions/myFavouriteActions";
import myFavouriteApi from "../../apis/myFavouriteApi";

let favID = 0;
class SearchResultContainer extends Component {
  state = {
    isFuturePricesLoading: false,
    futurePrices: [],
    myFavourites: [],
    numDays: 0,
    numData: 0,
    msg: ""
  };
  // Handle the value of the checkboxes on AddStockModal
  handleChecked = e => {
    favID = e.target.value;
  };

  handleAddStockOnFavourite = async e => {
    const { symbol } = this.props.stock;
    this.props.addStockOnMyFavourite(favID, symbol);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitFurturePrice = async e => {
    e.preventDefault();
    const { symbol } = this.props.stock;
    const { numDays, numData } = this.state;
    if (numDays === 0 || numData === 0) {
      this.setState({
        msg: "Put days and number of data"
      });
    } else {
      this.setState({
        isFuturePricesLoading: true
      });
      let prices = [];
      try {
        prices = await this.props.getFuturePrices(symbol, numDays, numData);
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

  async componentDidMount() {
    const { user } = this.props.auth;
    if (user !== null || user !== undefined) {
      this.props.getAllFavourites(user.memberID);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.auth.user !== this.props.auth.user) {
      const { user } = this.props.auth;
      this.props.getAllFavourites(user.memberID);
    }
  }

  render() {
    const { stock, myFavourite } = this.props;
    const { futurePrices, msg, isFuturePricesLoading } = this.state;
    return (
      <SearchResultPresenter
        stock={stock}
        myFavourite={myFavourite}
        futurePrices={futurePrices}
        msg={msg}
        isFuturePricesLoading={isFuturePricesLoading}
        handleChange={this.handleChange}
        handleChecked={this.handleChecked}
        handleAddStockOnFavourite={this.handleAddStockOnFavourite}
        submitFurturePrice={this.submitFurturePrice}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    auth: state.auth,
    myFavourite: state.myFavourite
  };
};

export default connect(mapStateToProps, {
  addStockOnMyFavourite,
  getAllFavourites,
  getFuturePrices
})(SearchResultContainer);
