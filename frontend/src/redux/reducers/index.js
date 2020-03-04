import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import addProductReducers from "./addProductReducer";

export default combineReducers({
  auth: AuthReducers,
  addProductReducers //addProductReducers:addProductReducer
});
