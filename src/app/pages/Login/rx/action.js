import { getToken } from "../../../auth/selectors";
import * as types from "./types";

export const postAnalisisPerencanaan =
  (mapa_id, content) => async (dispatch, getState, api) => {
    dispatch({ type: types.SUBMIT_START });
    const { error } = await api.postApaPicMapa(
      getToken(getState()),
      mapa_id,
      content
    );
    if (!error) dispatch({ type: types.SUBMIT_SUCCESSFUL });
    else
      dispatch({
        type: types.SUBMIT_FAILED,
        payload: error,
      });

    return !error;
  };
