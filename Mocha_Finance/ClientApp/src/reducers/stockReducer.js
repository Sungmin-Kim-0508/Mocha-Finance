import {
  LOADING_STOCK,
  SEARCHED_STOCK,
  ADD_STOCK_ON_MY_FAVORITE,
  LOADING_MY_FAVOURITE_STOCK,
  LOADED_MY_FAVOURITE_STOCK
} from "../actions/types";

const initialState = {
  isLoading: false,
  isSearch: false,
  stockInfos: [],
  myFavouriteStocks: [],
  symbol: "",
  companyName: "",
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_STOCK:
    case LOADING_MY_FAVOURITE_STOCK:
      return {
        ...state,
        isLoading: true,
        isSearch: false,
        myFavouriteStocks: [],
        stockInfos: [],
        msg: ""
      };
    case SEARCHED_STOCK:
      return {
        ...state,
        isLoading: false,
        stockInfos: action.payload.stockInfos,
        symbol: action.payload.symbol,
        companyName: action.payload.companyName,
        isSearch: true
      };
    case ADD_STOCK_ON_MY_FAVORITE:
      return {
        ...state,
        msg: "Add Successfully!"
      };
    case LOADED_MY_FAVOURITE_STOCK:
      return {
        ...state,
        isLoading: false,
        myFavouriteStocks: action.payload
      };
    default:
      return state;
  }
}
