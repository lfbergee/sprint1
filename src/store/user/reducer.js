import { actionTypes } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return { ...state, isAuthenticated: true };
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      throw new Error();
  }
};
