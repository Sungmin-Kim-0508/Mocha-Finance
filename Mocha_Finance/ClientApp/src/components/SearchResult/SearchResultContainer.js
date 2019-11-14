import React, { Component } from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { connect } from "react-redux";
import { addStockOnMyFavourite } from "../../actions/stockActions";
import myFavouriteApi from "../../apis/myFavouriteApi";

let favID = 0;
class SearchResultContainer extends Component {
  state = {
    myFavourites: []
  };
  // Handle the value of the checkboxes on AddStockModal
  handleChecked = e => {
    favID = e.target.value;
  };

  handleAddStockOnFavourite = async e => {
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
    const { myFavourites } = this.state;
    const { stock } = this.props;
    return (
      <SearchResultPresenter
        stock={stock}
        myFavourites={myFavourites}
        handleChecked={this.handleChecked}
        handleAddStockOnFavourite={this.handleAddStockOnFavourite}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { addStockOnMyFavourite })(
  SearchResultContainer
);
