import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const setUser = (name, profileImage) => (dispatch) => {
  dispatch({
    type: "SET_USER",
    payload: { name, profileImage },
  });

  // Display a toast message for Google Sign-In success
  toast("Google Sign-In Successful! 👐");
};

export const logouts = () => (dispatch) => {
  // Dispatch an action to clear user data and set isAuthenticated to false
  dispatch({
    type: "LOGOUT",
  });
};
