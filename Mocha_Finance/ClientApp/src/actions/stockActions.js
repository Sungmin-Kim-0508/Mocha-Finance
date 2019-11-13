import { LOADING_STOCK, SEARCHED_STOCK } from "./types";
import { returnErrors } from "./errorActions";
import { stockApi } from "../apis/stockApi";

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

export const searchTodayStock = keyword => async dispatch => {
  dispatch({ type: LOADING_STOCK });
  try {
    const { data } = await stockApi.todayPrice(keyword);
    const {
      data: { symbolsList }
    } = await stockApi.getSymbolList();
    const myCompany = symbolsList.find(item => item.symbol === data.symbol);
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
