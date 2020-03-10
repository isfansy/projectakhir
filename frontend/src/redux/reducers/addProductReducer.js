import {
  GET_PRODUCT_CATEGORY_ERROR,
  GET_PRODUCT_CATEGORY_LOADING,
  GET_PRODUCT_CATEGORY_SUCCES,
  ADD_PRODUCT_LOADING
} from "../actions/types";

const INITIAL_STATE = {
  productCategory: [],
  loading: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_CATEGORY_SUCCES:
      return { ...state, productCategory: action.payload };
    case GET_PRODUCT_CATEGORY_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCT_CATEGORY_ERROR:
      return { ...state, error: true };
    case ADD_PRODUCT_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
