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
  console.log(email, password);
  try {
    const { data: userInfo } = await authApi.login(email, password);

    // if email or password is invalid
    if (userInfo.memberID === 0) {
      const { data: msg } = await authApi.getMessage(email, password);
      dispatch({ type: LOGIN_FAIL, payload: msg });
    } else {
      let data = {
        user: {
          memeberID: userInfo.memberID,
          email: userInfo.email,
          myFavourites: userInfo.myFavourites
        },
        token: "authenticated"
      };
      console.log(userInfo);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
  } catch (err) {
    console.log(err);
    // returnErrors()
  }
};

export const register = (email, password) => async (dispatch, getState) => {
  try {
    const registerInfo = await authApi.register(email, password);
    console.log(registerInfo);
  } catch (err) {
    // const { status } = err.response.returnErrors(
    //   "Failed to Register. Please Make sure you put email and password.",
    //   status
    // );
    console.log(err);
  }
  // console.log(email, password);
};
