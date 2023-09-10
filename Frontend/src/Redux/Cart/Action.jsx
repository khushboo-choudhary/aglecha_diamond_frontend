export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const ADD_CART = "ADD_CART";

export const REMOVE_ONE_CART = "REMOVE_ONE_CART";

export const EMPTY_CART = "EMPTY_CART";
export const ADD_WISHLIST = "ADD_WISHLIST";
export const REMOVE_WISHLIST = "REMOVE_WISHLIST";
export const DELETE_ITEM_CART = "DELETE_ITEM_CART";

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

export const addCart = (payload) => ({
  type: ADD_CART,
  payload,
});

export const removeOneCart = (payload) => ({
  type: REMOVE_ONE_CART,
  payload,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

export const addWishlist = (payload) => ({
  type: ADD_WISHLIST,
  payload,
});

export const removeWishlist = (payload) => ({
  type: REMOVE_WISHLIST,
  payload,
});

export const deleteItemCart = (payload) => ({
  type: DELETE_ITEM_CART,
  payload,
});
