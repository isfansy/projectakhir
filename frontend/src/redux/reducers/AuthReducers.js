import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  AUTH_LOADING,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER,
  AUTH_SYSTEM_ERROR,
  AUTH_REGISTER_ERROR
} from "./../actions/types";
const INITIAL_STATE = {
  id: 0,
  username: "",
  password: "",
  email: "",
  role: "",
  error: "",
  loginerror: "",
  login: false,
  loading: false,
  register: false,
  authchecked: false,
  loginstatus: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SUCCESS_REGISTER":
      return { ...state, ...action.payload, register: true, error: "" };
    case "ERROR_REGISTER":
      return { ...state, error: action.payload };
    case "REGIS_LOADING":
      return { ...state, loading: true, error: "" };
    case "REGIS_LOADING":
      return { ...state, loading: true, error: "" };
    case USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        authchecked: true,
        loginstatus: true
      };
    case USER_LOGOUT:
      return { ...INITIAL_STATE, authchecked: true };
    case AUTH_LOADING:
      return { ...state, error: "", loading: true };
    case AUTH_SYSTEM_ERROR:
      return { ...INITIAL_STATE, ...action.payload, authchecked: true };
    case AUTH_LOGIN_ERROR:
      return { ...INITIAL_STATE, loginerror: action.payload };
    default:
      return state;
  }
};
