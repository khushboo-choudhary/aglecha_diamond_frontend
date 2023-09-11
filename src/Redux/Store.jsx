import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { cartReducer } from "./Cart/Reducer";
import { shippingReducer } from "./ShippingAddress/Reducer";
import { loginReducer } from "./LoginUserData/Reducer";
import { categoryReducer } from "./CategoryData/Reducer";
import { searchReducer } from "./SearchData/Reducer";
import { userReducer } from "./GoogleUserData/Reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const rootReducer = combineReducers({
  cart: cartReducer,
  shippingAddress: shippingReducer,
  loginUserData: loginReducer,
  categoryReducer: categoryReducer,
  searchReducer: searchReducer,
  userData: userReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
