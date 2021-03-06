import React, { Component } from "react";
import FavouritePresenter from "./FavoritePresenter";
import myFavouriteApi from "../../apis/myFavouriteApi";
import { connect } from "react-redux";
import {
  getAllStockByFavId,
  getAllStockByMemberID
} from "../../actions/stockActions";

class FavouriteContainer extends Component {
  state = {
    myFavouriteName: "",
    myFavourites: []
  };

  handleGetAllStockByFavID = e => {
    const favID = parseInt(e.target.id);
    this.props.getAllStockByFavId(favID);
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddFavourite = async e => {
    e.preventDefault();
    const { myFavouriteName, myFavourites } = this.state;
    const { user } = this.props.auth;

    const { data } = await myFavouriteApi.addMyFavourite(
      user.memberID,
      myFavouriteName
    );

    let favName = [...myFavourites, data.myFavouriteName];
    favName = [...new Set(favName)];
    this.setState({
      myFavourites: favName
    });
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

      this.props.getAllStockByMemberID(user.memberID);
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
      <FavouritePresenter
        stock={stock}
        myFavourites={myFavourites}
        handleAddFavourite={this.handleAddFavourite}
        handleInput={this.handleInput}
        handleGetAllStockByFavID={this.handleGetAllStockByFavID}
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

export default connect(mapStateToProps, {
  getAllStockByFavId,
  getAllStockByMemberID
})(FavouriteContainer);
