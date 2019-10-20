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

export const login = (email, password) => async (dispatch, getState) => {
  // api/SampleData/WeatherForecasts?startDateIndex=1
  let userInfo = await fetch(
    `https://localhost:44379/api/SampleData/WeatherForecasts?startDateIndex=${1}`
  );
  console.log(userInfo);
};
