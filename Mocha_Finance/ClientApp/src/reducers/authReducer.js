import {
  LOADING_USER,
  LOADED_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ERRORS
} from "../actions/types";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return;
    case LOADED_USER:
      return;
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return;
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case GET_ERRORS:
      localStorage.removeItem("token");
      return;
    default:
      return state;
  }
}
