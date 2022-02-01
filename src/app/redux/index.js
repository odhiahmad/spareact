import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./store";

import { getToken } from "../../utils/cookie";

export default createStore(
  combineReducers(reducers),
  { auth: { token: getToken() } },
  composeWithDevTools(applyMiddleware(thunk))
);
