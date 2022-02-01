import * as types from "./types";
import { login } from "../../../../services/login";
import { setToken, removeToken } from "../../../../utils/cookie";
const loginStart = () => ({ type: types.LOGIN_START });
const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: { token },
});
const loginErr = (err) => ({ type: types.LOGIN_ERR, payload: err });
const logoutStart = () => ({ type: types.LOGOUT_START });
const logoutSuccess = () => ({ type: types.LOGOUT_SUCCESS });

export const signIn = (body) => async (dispatch) => {
  dispatch(loginStart());
  const { token, berhasil } = await login(body);
  if (berhasil) {
    dispatch(loginSuccess(token));
    setToken(token);

    return loginSuccess && berhasil;
  } else dispatch(loginErr(!berhasil));

  return false;
};

export const reLogin = (token) => async (dispatch) => {
  dispatch(loginSuccess(token));
};

export const signOut = () => async (dispatch) => {
  dispatch(logoutStart());
  removeToken();
  window.location.replace("/login");
  dispatch(logoutSuccess());
};
