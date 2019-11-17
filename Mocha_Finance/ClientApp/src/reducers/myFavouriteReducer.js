import { LOADING_MY_FAVOURITE, LOADED_MY_FAVOURITE } from "../actions/types";

const initialState = {
  isLoading: false,
  myFavourites: [],
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_MY_FAVOURITE:
      return {
        ...state,
        isLoading: true
      };
    case LOADED_MY_FAVOURITE:
      return {
        ...state,
        isLoading: false,
        myFavourites: action.payload
      };
    default:
      return state;
  }
}
