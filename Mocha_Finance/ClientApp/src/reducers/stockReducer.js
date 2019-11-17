import {
  LOADING_STOCK,
  SEARCHED_STOCK,
  ADD_STOCK_ON_MY_FAVORITE,
  LOADING_MY_FAVOURITE_STOCK,
  LOADED_MY_FAVOURITE_STOCK,
  NOT_FOUND_SYMBOL
} from "../actions/types";

const initialState = {
  isLoading: false,
  isSearched: false,
  isNotFoundSymbol: false,
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
        isSearched: false,
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
        isSearched: true
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
    case NOT_FOUND_SYMBOL:
      return {
        ...state,
        isLoading: false,
        isNotFoundSymbol: true,
        stockInfos: [],
        myFavouriteStocks: []
      };
    default:
      return state;
  }
}
