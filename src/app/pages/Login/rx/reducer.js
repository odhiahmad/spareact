import * as types from "./types";

const initialState = {
  loading: false,
  error: null,
  token: null,
  submitLoading: false,
  submitError: null,
};

export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SUBMIT_START:
      return { ...state, submitLoading: true, submitError: null };
    case types.SUBMIT_SUCCESSFUL:
      return {
        ...state,
        submitLoading: false,
        submitError: null,
        token: payload,
      };
    case types.SUBMIT_FAILED:
      return { ...state, submitLoading: false, submitError: payload };
    default:
      return state;
  }
}
