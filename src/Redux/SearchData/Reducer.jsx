// searchReducer.js
import { SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_FAILURE } from "./Action";

const initialState = {
  error: false,
  loading: false,
  searchData: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...state, loading: true };

    case SEARCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        searchData: action.payload,
      };

    case SEARCH_FAILURE:
      return {
        ...initialState,
        error: true,
        loading: false,
        searchData: [],
      };

    default:
      return state;
  }
};
