import React, { Component } from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { connect } from "react-redux";
import { addStockOnMyFavourite } from "../../actions/stockActions";
import { getAllFavourites } from "../../actions/myFavouriteActions";
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
    return (
      <SearchResultPresenter
        stock={stock}
        myFavourite={myFavourite}
        handleChecked={this.handleChecked}
        handleAddStockOnFavourite={this.handleAddStockOnFavourite}
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
  getAllFavourites
})(SearchResultContainer);
