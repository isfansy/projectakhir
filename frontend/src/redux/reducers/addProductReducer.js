import {
  GET_PRODUCT_CATEGORY_ERROR,
  GET_PRODUCT_CATEGORY_LOADING,
  GET_PRODUCT_CATEGORY_SUCCES
} from "../actions/types";

const INITIAL_STATE = {
  productCategory: [],
  loading: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_CATEGORY_SUCCES:
      return { ...INITIAL_STATE, productCategory: action.payload };
    case GET_PRODUCT_CATEGORY_LOADING:
      return { ...INITIAL_STATE, loading: true };
    case GET_PRODUCT_CATEGORY_ERROR:
      return { ...INITIAL_STATE, error: true };
    default:
      return state;
  }
};
