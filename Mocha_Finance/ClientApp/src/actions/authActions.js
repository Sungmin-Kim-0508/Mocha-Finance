import {
  LOADING_USER,
  LOADED_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT
} from "./types";
import authApi from "../apis/authApi";
import { returnErrors } from "./errorActions";

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: LOADING_USER });

  try {
  } catch (error) {}
};

export const login = (email, password) => async (dispatch, getState) => {
  dispatch({ type: LOADING_USER });
  console.log(email, password);
  if (email.length === 0) {
    const msg = "Put the email";
    dispatch({ type: LOGIN_FAIL, payload: msg });
    return;
  }
  if (password.length === 0) {
    const msg = "Put the password";
    dispatch({ type: LOGIN_FAIL, payload: msg });
    return;
  }
  try {
    const { data: userInfo } = await authApi.login(email, password);

    // if email or password are invalid
    if (userInfo.memberID === 0) {
      const { data: msg } = await authApi.getMessage(email, password);
      dispatch({ type: LOGIN_FAIL, payload: msg });
    }
    // if email or password are valid
    else {
      let data = {
        user: {
          memeberID: userInfo.memberID,
          email: userInfo.email,
          myFavourites: userInfo.myFavourites
        },
        emailToken: userInfo.email,
        pToken: userInfo.password
      };
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
  } catch (err) {
    console.log(err);
    // returnErrors()
  }
};

export const register = (email, password1, password2) => async (
  dispatch,
  getState
) => {
  dispatch({ type: LOADING_USER });

  if (email.length === 0) {
    const msg = "Please put email address";
    dispatch({ type: REGISTER_FAIL, payload: msg });
    return;
  }
  if (password1 !== password2) {
    const msg = "Password does not match";
    dispatch({ type: REGISTER_FAIL, payload: msg });
    return;
  }

  try {
    const { data: userInfo } = await authApi.register(email, password1);
    console.log(userInfo);

    let data = {
      user: {
        memeberID: userInfo.memberID,
        email: userInfo.email,
        myFavourites: userInfo.myFavourites
      },
      emailToken: userInfo.email,
      pToken: userInfo.password
    };
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (err) {
    // const { status } = err.response.returnErrors(
    //   "Failed to Register. Please Make sure you put email and password.",
    //   status
    // );
    console.log(err);
  }
  // console.log(email, password);
}; // register action

export const logout = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT, payload: "Logout Succesfully!" });
};
