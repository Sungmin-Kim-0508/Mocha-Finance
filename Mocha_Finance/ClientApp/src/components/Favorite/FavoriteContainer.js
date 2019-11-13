import React, { Component } from "react";
import FavouritePresenter from "./FavoritePresenter";
import myFavouriteApi from "../../apis/myFavouriteApi";
import authApi from "../../apis/authApi";
import { connect } from "react-redux";

class FavouriteContainer extends Component {
  state = {
    myFavouriteName: "",
    symbol: "",
    myFavouriteNames: []
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddFavourite = async e => {
    e.preventDefault();
    const { myFavouriteName, myFavouriteNames } = this.state;
    const { user } = this.props.auth;

    const { data } = await myFavouriteApi.addMyFavourite(
      user.memberID,
      myFavouriteName
    );
    let favName = [...myFavouriteNames, data.myFavouriteName];
    favName = [...new Set(favName)];
    this.setState({
      myFavouriteNames: favName
    });
  };

  async componentDidMount() {
    const { user } = this.props.auth;
    if (user !== null || user !== undefined) {
      const { data: allMyFav } = await myFavouriteApi.getAllFavourites(
        user.memberID
      );
      let favNames = allMyFav.map(item => item.myFavouriteName);
      this.setState({
        myFavouriteNames: [...new Set(favNames)]
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.auth.user !== this.props.auth.user) {
      const { user } = this.props.auth;
      const { data: allMyFav } = await myFavouriteApi.getAllFavourites(
        user.memberID
      );
      let favNames = allMyFav.map(item => item.myFavouriteName);
      this.setState({
        myFavouriteNames: [...new Set(favNames)]
      });
      // console.log([...new Set(favNames)]);
      console.log(allMyFav);

      // User Information
      const { data: userInfo } = await authApi.getUserInfo(user.memberID);
      console.log(userInfo);
    }
  }

  render() {
    const { myFavouriteName, myFavouriteNames, symbol } = this.state;
    console.log(symbol);
    return (
      <FavouritePresenter
        myFavouriteNames={myFavouriteNames}
        handleAddFavourite={this.handleAddFavourite}
        handleInput={this.handleInput}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(FavouriteContainer);
