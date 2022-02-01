export const loginState = (state) => state.login;
export const getToken = (state) => loginState(state).token;
export const getLogin = (state) => loginState(state).login;
export const getLoading = (state) => loginState(state).loading;
export const getRefreshLoading = (state) => loginState(state).refreshLoading;
export const getError = (state) => loginState(state).error;
