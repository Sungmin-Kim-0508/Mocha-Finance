import React, { Component } from "react";
import FavouritePresenter from "./FavoritePresenter";
import myFavouriteApi from "../../apis/myFavouriteApi";
import { connect } from "react-redux";

class FavouriteContainer extends Component {
  state = {};

  handleAddFavourite = async e => {
    e.preventDefault();
    const { user } = this.props.auth;
    // const addFav = await myFavouriteApi.addMyFavourite(
    //   user.memberID,
    //   "New York"
    // );
    // console.log(addFav);

    const { data: allMyFav } = await myFavouriteApi.getAllFavourites(
      user.memberID
    );
    console.log(allMyFav);
  };
  render() {
    const { user } = this.props.auth;
    console.log(user);
    return <FavouritePresenter handleAddFavourite={this.handleAddFavourite} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(FavouriteContainer);
