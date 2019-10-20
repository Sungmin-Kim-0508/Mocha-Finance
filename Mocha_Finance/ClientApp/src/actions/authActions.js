import {
  LOADING_USER,
  LOADED_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL
} from "./types";

import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  console.log("loadUser()");
};

export const login = () => (dispatch, getState) => {
  console.log("login");
};
