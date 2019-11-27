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
    const userId = localStorage.getItem("id");
    if (userId === null) {
      dispatch({ type: LOGIN_FAIL, payload: "" });
    } else {
      const { data: userInfo } = await authApi.getUserInfo(userId);

      let data = {
        user: {
          memberID: userInfo.memberID,
          email: userInfo.email,
          myFavourites: userInfo.myFavourites
        }
      };
      dispatch({ type: LOADED_USER, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = (email, password) => async (dispatch, getState) => {
  dispatch({ type: LOADING_USER });
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
          memberID: userInfo.memberID,
          email: userInfo.email,
          myFavourites: userInfo.myFavourites
        },
        idToken: userInfo.memberID
      };
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
  } catch (err) {
    console.log(err);
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

    let data = {
      user: {
        memberID: userInfo.memberID,
        email: userInfo.email,
        myFavourites: userInfo.myFavourites
      },
      idToken: userInfo.memberID
    };
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    console.log(err.response);
    const { status } = err.response;
    returnErrors("Check your network connection.", status);
  }
}; // register action

export const logout = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT, payload: "Logout Succesfully!" });
};
