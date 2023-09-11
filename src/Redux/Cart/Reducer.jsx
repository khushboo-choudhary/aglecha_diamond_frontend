import {
  DATA_LOADING,
  DATA_SUCCESS,
  DATA_FAILURE,
  ADD_CART,
  REMOVE_ONE_CART,
  EMPTY_CART,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
  DELETE_ITEM_CART,
} from "./Action";

const initState = {
  loading: false,
  error: false,
  data: [],
  cart: [],
  wishlist: [],
};

export const cartReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case DATA_LOADING:
      return { ...store, loading: true };

    case DATA_SUCCESS:
      return { ...store, loading: false, todos: [...payload], error: false };

    case DATA_FAILURE:
      return { ...store, loading: false, error: true, todos: [] };

    case ADD_CART:
      const AfterAdding = store.cart.find((x) => x._id === payload._id);
      if (AfterAdding) {
        var notFound = store.cart.map((x) =>
          x._id === payload._id
            ? { ...AfterAdding, qty: AfterAdding.qty + 1 }
            : x
        );
        return { ...store, cart: notFound };
      } else {
        return { ...store, cart: [...store.cart, { ...payload, qty: 1 }] };
      }

    case REMOVE_ONE_CART:
      const AfterRemove = store.cart.find((x) => x._id === payload._id);
      if (AfterRemove.qty === 1) {
        var removeone = store.cart.filter((x) => x._id !== payload._id);
        return { ...store, cart: removeone };
      } else {
        // eslint-disable-next-line no-redeclare
        var removeone = store.cart.map((x) =>
          x._id === payload._id
            ? { ...AfterRemove, qty: AfterRemove.qty - 1 }
            : x
        );
        return { ...store, cart: removeone };
      }

    case EMPTY_CART:
      return { ...store, cart: [] };

    case DELETE_ITEM_CART:
      const AfterDeleteCart = store.cart.filter((el) => el.id !== payload);
      return { ...store, cart: AfterDeleteCart };

    case ADD_WISHLIST:
      const addedWishlistItem = store.wishlist.find(
        (item) => item._id === payload._id
      );
      if (!addedWishlistItem) {
        return { ...store, wishlist: [...store.wishlist, payload] };
      }
      return store;

    case REMOVE_WISHLIST:
      const updatedWishlist = store.wishlist.filter(
        (item) => item._id !== payload._id
      );
      return { ...store, wishlist: updatedWishlist };

    default:
      return store;
  }
};
