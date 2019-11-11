import {
  LOADING_USER,
  LOADED_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ERRORS,
  LOGOUT
} from "../actions/types";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  idToken: localStorage.getItem("id"),
  user: {},
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoading: true,
        msg: "Wait for me...!!"
      };
    case LOADED_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("id", action.payload.idToken);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        msg: ""
      };
    case LOGOUT:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case GET_ERRORS:
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        msg: action.payload
      };
    default:
      return state;
  }
}
