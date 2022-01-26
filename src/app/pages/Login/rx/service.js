export const login = (state) => state.login;
export const getToken = (state) => login(state).token;
export const getLoading = (state) => login(state).loading;
export const getError = (state) => login(state).error;
export const getSubmitLoading = (state) => login(state).submitLoading;
export const getSubmitError = (state) => login(state).submitError;
