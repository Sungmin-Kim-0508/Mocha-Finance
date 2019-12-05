import axios from "axios";
import routes from "../routes";

const api = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/"
});

export const stockApi = {
  historicalPrice: keyword => api.get(`historical-price-full/${keyword}`),
  todayPrice: keyword =>
    api.get(`historical-price-full/${keyword}?from=2019-11-13&to=2019-11-13`),
  getSymbolList: () => api.get(`company/stock/list`),
  symbolList: () => api.get(`company/stock/list`)
};

const serverApi = axios.create({
  baseURL: `${routes.base_root_url}/api/Stock/`
});

export const serverCrudApi = {
  getAllStockByFavID: favid => serverApi.get(`GetStocksByFavID?favID=${favid}`),
  getAllStcokByMemID: memid =>
    serverApi.get(`GetAllStockByMemberID?memId=${memid}`),
  addStockByFavIDAndStockSymbol: (favid, symbol) =>
    serverApi.post(
      `AddStockByFavIDAndStockSymbol?favid=${favid}&symbol=${symbol}`
    )
};

const expPriceApi = axios.create({
  baseURL: `${routes.base_root_url}/api/ExpectedPrice/`
});

export const expectedPriceApi = {
  getFuturePrices: (stockSymbol, numberOfDataToUse, futuredays) =>
    expPriceApi.get(
      `getFuturePrices?stockSymbol=${stockSymbol}&numberOfDataToUse=${numberOfDataToUse}&futuredays=${futuredays}`
    )
};
