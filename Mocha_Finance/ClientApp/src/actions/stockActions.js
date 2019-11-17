import {
  LOADING_STOCK,
  SEARCHED_STOCK,
  ADD_STOCK_ON_MY_FAVORITE,
  LOADING_MY_FAVOURITE_STOCK,
  LOADED_MY_FAVOURITE_STOCK,
  NOT_FOUND_SYMBOL
} from "./types";
import { returnErrors } from "./errorActions";
import { stockApi, serverCrudApi } from "../apis/stockApi";

export const searchStock = keyword => async dispatch => {
  dispatch({ type: LOADING_STOCK });

  try {
    const { data } = await stockApi.historicalPrice(keyword);
    dispatch({ type: SEARCHED_STOCK, payload: data.historical });
  } catch (error) {
    error.response === undefined
      ? console.error(error)
      : returnErrors(error.response.data, error.response.status);
  }
};

export const searchStockDetails = keyword => async dispatch => {
  dispatch({ type: LOADING_STOCK });
  try {
    const { data } = await stockApi.todayPrice(keyword);
    const {
      data: { symbolsList }
    } = await stockApi.getSymbolList();
    const myCompany = symbolsList.find(item => item.symbol === data.symbol);
    if (myCompany === undefined) {
      dispatch({ type: NOT_FOUND_SYMBOL });
      return;
    }
    dispatch({
      type: SEARCHED_STOCK,
      payload: {
        stockInfos: data.historical,
        symbol: data.symbol,
        companyName: myCompany.name
      }
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const addStockOnMyFavourite = (favID, symbol) => async dispatch => {
  const isAdded = await serverCrudApi.addStockByFavIDAndStockSymbol(
    favID,
    symbol
  );

  dispatch({ type: ADD_STOCK_ON_MY_FAVORITE });
};

export const getAllStockByFavId = favID => async dispatch => {
  dispatch({ type: LOADING_MY_FAVOURITE_STOCK });
  const { data: stockList } = await serverCrudApi.getAllStockByFavID(favID);
  const {
    data: { symbolsList }
  } = await stockApi.getSymbolList();
  // const mySymbol = symbolsList.find(item => item.symbol === symbol);
  const myStockList = stockList.map(item => {
    const mySymbol = symbolsList.find(sym => sym.symbol === item.symbol);
    return mySymbol;
  });
  dispatch({ type: LOADED_MY_FAVOURITE_STOCK, payload: myStockList });
};

export const getAllStockByMemberID = memID => async dispatch => {
  dispatch({ type: LOADING_MY_FAVOURITE_STOCK });
  const { data: stockList } = await serverCrudApi.getAllStcokByMemID(memID);
  const {
    data: { symbolsList }
  } = await stockApi.getSymbolList();

  const myStockList = stockList.map(item => {
    const mySymbol = symbolsList.find(sym => sym.symbol === item.symbol);
    return mySymbol;
  });

  console.log(stockList);

  dispatch({ type: LOADED_MY_FAVOURITE_STOCK, payload: myStockList });
};
