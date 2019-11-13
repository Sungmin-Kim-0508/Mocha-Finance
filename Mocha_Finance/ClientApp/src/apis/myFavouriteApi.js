import axios from "axios";
import routes from "../routes";

const api = axios.create({
  baseURL: `${routes.base_root_url}/api/MyFavourite/`
});

const myFavourite = {
  getAllFavourites: memID => {
    return api.get(`GetMyFavouriteList?memID=${memID}`);
  },
  addMyFavourite: (memID, favname) => {
    return api.post(`AddMyFavourite?memID=${memID}&favname=${favname}`);
  }
};

export default myFavourite;
