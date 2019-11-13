import React, { Component } from "react";
import FavouritePresenter from "./FavoritePresenter";
import myFavouriteApi from "../../apis/myFavouriteApi";
import { connect } from "react-redux";

class FavouriteContainer extends Component {
  state = {
    myFavourite: "",
    myFavouriteNames: []
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddFavourite = async e => {
    e.preventDefault();
    const { myFavourite, myFavouriteNames } = this.state;
    const { user } = this.props.auth;

    const { data } = await myFavouriteApi.addMyFavourite(
      user.memberID,
      myFavourite
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
      console.log([...new Set(favNames)]);
    }
  }

  render() {
    const { myFavourite, myFavouriteNames } = this.state;
    console.log(myFavouriteNames);
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
