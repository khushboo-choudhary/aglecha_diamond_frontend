import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (data) => (dispatch) => {
  dispatch(loginLoading());

  axios
    .post("https://aglecha-backend.onrender.com/login", data)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      toast("Login Successfull! 👐");
    })
    .catch((error) => {
      toast.error(error.response?.data?.message || "Login failed");
      dispatch(loginFailure());
    });
};

export const register = (data) => (dispatch) => {
  dispatch(loginLoading());
  axios
    .post("https://aglecha-backend.onrender.com/register", data)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      toast("Registration Successfull! 👐");
    })
    .catch((error) => {
      toast.error(error.response?.data?.message || "Registration failed");
      dispatch(loginFailure());
    });
};
