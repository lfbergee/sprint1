import { actionTypes } from "./actionTypes";

const login = (dispatch, payload) => dispatch({ type: actionTypes.AUTHENTICATE, payload });

export const actions = {
  login
};
