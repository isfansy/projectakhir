import {
  GET_PRODUCT_CATEGORY_ERROR,
  GET_PRODUCT_CATEGORY_SUCCES,
  GET_PRODUCT_CATEGORY_LOADING
} from "./types";
import Axios from "axios";
import { Url } from "../../helper/apiurl";

export const getAllProductCategory = () => {
  return dispatch => {
    dispatch({ type: GET_PRODUCT_CATEGORY_LOADING });
    Axios.get(`${Url}product/product-category`)
      .then(res => {
        dispatch({
          type: GET_PRODUCT_CATEGORY_SUCCES,
          payload: res.data.dataCategory
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
