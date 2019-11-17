import { LOADING_MY_FAVOURITE, LOADED_MY_FAVOURITE } from "./types";
import myFavouriteApi from "../apis/myFavouriteApi";

export const getAllFavourites = memberID => async dispatch => {
  dispatch({ type: LOADING_MY_FAVOURITE });

  const { data: allMyFav } = await myFavouriteApi.getAllFavourites(memberID);
  let myFavObj = allMyFav.map(item => {
    if (item !== null) {
      return {
        myFavouriteName: item.myFavouriteName,
        myFavouriteID: item.myFavouriteID
      };
    }
  });

  dispatch({ type: LOADED_MY_FAVOURITE, payload: myFavObj });
};
