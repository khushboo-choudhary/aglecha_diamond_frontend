import { ADD_SHIPPING_ADDRESS } from "./Action";

const initState = {
  ShippingAddress: [],
};

export const shippingReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_SHIPPING_ADDRESS:
      return { ...store, ShippingAddress: payload };

    default:
      return store;
  }
};
