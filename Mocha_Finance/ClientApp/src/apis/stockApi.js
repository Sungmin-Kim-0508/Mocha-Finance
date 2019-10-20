import axios from "axios";

const api = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/"
});

export const stockApi = {
  historicalPrice: keyword => api.get(`historical-price-full/${keyword}`)
};
