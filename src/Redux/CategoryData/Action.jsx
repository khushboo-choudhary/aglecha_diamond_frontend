import axios from "axios";

export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const dataLoading = () => ({
  type: DATA_LOADING,
});

export const dataSuccess = (payload) => ({
  type: DATA_SUCCESS,
  payload,
});

export const dataFailure = () => ({
  type: DATA_FAILURE,
});

export const getData = (data) => (dispatch) => {
  dispatch(dataLoading());
  axios
    .get(`https://aglecha-backend.onrender.com/product/${data.id}`, {
      params: {
        sorting: data.sortby,
        sizes_like: data.size,
        discount: data.discount,
        rating: data.rating,
      },
    })
    .then((res) => dispatch(dataSuccess(res.data)))
    .catch((err) => dispatch(dataFailure()));
};
