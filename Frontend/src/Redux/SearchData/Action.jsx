// Action.js

import axios from "axios";

export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const searchLoading = () => ({
  type: SEARCH_LOADING,
});

export const searchSuccess = (payload) => ({
  type: SEARCH_SUCCESS,
  payload,
});

export const searchFailure = () => ({
  type: SEARCH_FAILURE,
});

export const searchData = (searchTerm) => (dispatch) => {
  dispatch(searchLoading());
  axios
    .get(
      `https://fancy-dove-stockings.cyclic.cloud/product/search?q=${searchTerm}`
    )
    .then((res) => dispatch(searchSuccess(res.data)))
    .catch((err) => dispatch(searchFailure()));
};
