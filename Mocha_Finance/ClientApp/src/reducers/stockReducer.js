import { LOADING_STOCK, SEARCHED_STOCK } from "../actions/types";

const initialState = {
  isLoading: false,
  isSearch: false,
  stockInfos: [],
  symbol: "",
  companyName: "",
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_STOCK:
      return {
        ...state,
        isLoading: true,
        isSearch: false,
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
    default:
      return state;
  }
}
