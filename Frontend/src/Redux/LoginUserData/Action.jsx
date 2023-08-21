import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
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
    .post("https://glamorous-frog-cummerbund.cyclic.cloud/login", data)
    .then((res) => {
      console.log("logim", res);
      console.log("---------------------");
      dispatch(loginSuccess(res.data));
      toast.success("Login Successfully");
    })
    .catch((error) => {
      alert(error.response.data.message);
      dispatch(loginFailure());
    });
};

export const register = (data) => (dispatch) => {
  dispatch(loginLoading());
  axios
    .post("https://glamorous-frog-cummerbund.cyclic.cloud/register", data)
    .then((res) => {
      console.log("regiter", res);
      console.log("===============");
      dispatch(loginSuccess(res.data));
      toast.success("Register Successfully");
    })
    .catch((error) => {
      alert(error.response.data.message);
      dispatch(loginFailure());
    });
};
<ToastContainer />;
