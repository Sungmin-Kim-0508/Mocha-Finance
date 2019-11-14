import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import myFavouriteApi from "../../apis/myFavouriteApi";
import { connect } from "react-redux";
import { searchStock } from "../../actions/stockActions";
import { serverCrudApi } from "../../apis/stockApi";
import { addStockOnMyFavourite } from "../../actions/stockActions";
import routes from "../../routes";

let favID = 0;
class HomeContainer extends Component {
  state = {
    keyword: "",
    stockInfos: [],
    myFavourites: [],
    isSearch: false,
    isLoading: false,
    error: ""
  };

  // Handle the value of the checkboxes on AddStockModal
  handleChecked = e => {
    favID = e.target.value;
  };

  handleAddStockOnFavourite = async e => {
    // console.log("handleAddStockOnFavourite");
    const { symbol } = this.props.stock;
    this.props.addStockOnMyFavourite(favID, symbol);
  };

  async componentDidMount() {
    const { user } = this.props.auth;
    if (user !== null || user !== undefined) {
      const { data: allMyFav } = await myFavouriteApi.getAllFavourites(
        user.memberID
      );

      let myFavObj = allMyFav.map(item => ({
        myFavouriteName: item.myFavouriteName,
        myFavouriteID: item.myFavouriteID
      }));
      this.setState({
        myFavourites: myFavObj
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.auth.user !== this.props.auth.user) {
      const { user } = this.props.auth;
      const { data: allMyFav } = await myFavouriteApi.getAllFavourites(
        user.memberID
      );

      let myFavObj = allMyFav.map(item => ({
        myFavouriteName: item.myFavouriteName,
        myFavouriteID: item.myFavouriteID
      }));
      this.setState({
        myFavourites: myFavObj
      });
    }
  }

  render() {
    const {
      stockInfos,
      isSearch,
      isLoading,
      symbol,
      companyName
    } = this.props.stock;
    const { error } = this.props.error;
    const { myFavourites } = this.state;
    return (
      <HomePresenter
        stock={this.props.stock}
        myFavourites={myFavourites}
        symbol={symbol}
        companyName={companyName}
        stockInfos={stockInfos}
        isSearch={isSearch}
        isLoading={isLoading}
        error={error}
        handleSearch={this.handleSearch}
        handleChecked={this.handleChecked}
        handleAddStockOnFavourite={this.handleAddStockOnFavourite}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    stock: state.stock,
    error: state.error
  };
};

export default connect(mapStateToProps, { searchStock, addStockOnMyFavourite })(
  HomeContainer
);
