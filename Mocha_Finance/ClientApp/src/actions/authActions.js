import {
  LOADING_USER,
  LOADED_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL
} from "./types";
import authApi from "../apis/authApi";
import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  console.log("loadUser()");
};

export const login = (email, password) => async (dispatch, getState) => {
  let userInfo = await authApi.register(email, password);
  console.log(userInfo);
};

export const register = (email, password) => async (dispatch, getState) => {};
