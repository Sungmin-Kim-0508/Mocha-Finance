import { combineReducers } from "redux";
import stockReducer from "./stockReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import myFavouriteReducer from "./myFavouriteReducer";

export default combineReducers({
  stock: stockReducer,
  auth: authReducer,
  error: errorReducer,
  myFavourite: myFavouriteReducer
});
