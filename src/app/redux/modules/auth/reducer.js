import { LOGIN } from "./initialconst";

const initialState = {
  isLogin: false,
};

export default function reducer(state, actions) {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
}
