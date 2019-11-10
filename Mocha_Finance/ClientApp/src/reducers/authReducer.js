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
  user: {},
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return;
    case LOADED_USER:
      return;
    case REGISTER_SUCCESS:
      return;
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        msg: ""
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case GET_ERRORS:
      localStorage.removeItem("token");
      return {
        ...state,
        msg: action.payload.msg
      };
    default:
      return state;
  }
}
