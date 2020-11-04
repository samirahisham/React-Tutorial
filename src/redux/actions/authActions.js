import instance from "./instance";
import { SET_USER } from "./actionTypes";
import jwt_decode from "jwt-decode";
export const signup = (userData) => {
  return async () => {
    try {
      const response = await instance.post("register/", userData);
      console.log("signup", response);
    } catch (error) {
      console.error(error);
    }
  };
};
// https://cpes-project-backend.herokuapp.com/api/login/
export const login = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("login/", userData);
      const user = response.data.access;
      dispatch(setCurrentUser(user));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCurrentUser = (token) => async (dispatch) => {
  let decodedUser = null;
  if (token) {
    decodedUser = jwt_decode(token);
  }
  setAuthToken(token);
  dispatch({
    type: SET_USER,
    payload: decodedUser,
  });
};

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

export const checkExpiredToken = () => (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const decodedUser = jwt_decode(token);
      if (decodedUser.exp >= currentTime) {
        dispatch(setCurrentUser(token));
      } else {
        dispatch(logout());
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  return setCurrentUser();
};
