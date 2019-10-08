import { LOADING_STOCK, SEARCHED_STOCK } from "./types";
import { returnErrors } from "./errorActions";
import { stockApi } from "../api";

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
