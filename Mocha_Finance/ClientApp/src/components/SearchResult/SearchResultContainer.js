import React, { Component } from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { connect } from "react-redux";
import { addStockOnMyFavourite } from "../../actions/stockActions";
import { getAllFavourites } from "../../actions/myFavouriteActions";

let favID = 0;
class SearchResultContainer extends Component {
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
        handleChange={this.handleChange}
        handleChecked={this.handleChecked}
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
