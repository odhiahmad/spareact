import * as types from "./types";

const initState = {
  token: null,
  login: false,
  loading: false,
  refreshLoading: false,
  error: null,
  user: {},
};

const loginReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        loading: false,
        login: true,
        error: null,
      };
    case types.LOGIN_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
        login: false,
      };
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
        login: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        token: null,
        login: false,
        user: null,
      };
    case types.LOGOUT_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
        login: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
