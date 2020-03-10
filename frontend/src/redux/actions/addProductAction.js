import {
  GET_PRODUCT_CATEGORY_ERROR,
  GET_PRODUCT_CATEGORY_SUCCES,
  GET_PRODUCT_CATEGORY_LOADING,
  ADD_PRODUCT_SUCCES,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING
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

export const addProductAction = (formData, options) => {
  return dispatch => {
    dispatch({ type: ADD_PRODUCT_LOADING });
    Axios.post(`${Url}product/product-add`, formData, options)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
};
