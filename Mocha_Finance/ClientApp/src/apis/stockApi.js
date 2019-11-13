import axios from "axios";

const api = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/"
});

export const stockApi = {
  historicalPrice: keyword => api.get(`historical-price-full/${keyword}`),
  todayPrice: keyword =>
    api.get(`historical-price-full/${keyword}?from=2019-11-13&to=2019-11-13`),
  getSymbolList: () => api.get(`company/stock/list`)
};
