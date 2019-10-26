import axios from "axios";
import { NEWS_API } from "../string";

// See https://newsapi.org/docs/endpoints/top-headlines for documentation.
const api = axios.create({
  baseURL: "https://newsapi.org/v2/"
});

const newsApi = {
  top_headlines: () => {
    return api.get("top-headlines", {
      params: {
        country: "us",
        apiKey: NEWS_API
      }
    });
  }
};

export default newsApi;
