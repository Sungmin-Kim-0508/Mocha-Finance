import axios from "axios";
import routes from "../routes";

const api = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/"
});

const serverApi = axios.create({
  baseURL: `${routes.base_root_url}/api/Stock/`
});

export const stockApi = {
  historicalPrice: keyword => api.get(`historical-price-full/${keyword}`),
  todayPrice: keyword =>
    api.get(`historical-price-full/${keyword}?from=2019-11-13&to=2019-11-13`),
  getSymbolList: () => api.get(`company/stock/list`)
};

export const serverCrudApi = {
  addStockByFavIDAndStockSymbol: (favid, symbol) =>
    serverApi.post(
      `AddStockByFavIDAndStockSymbol?favid=${favid}&symbol=${symbol}`
    )
};
