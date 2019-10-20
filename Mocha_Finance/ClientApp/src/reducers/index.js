import { combineReducers } from "redux";
import stockReducer from "./stockReducer";
import errorReducer from "./errorReducer";
import autoReducer from "./authReducer";

export default combineReducers({
  stock: stockReducer,
  auth: autoReducer,
  error: errorReducer
});
