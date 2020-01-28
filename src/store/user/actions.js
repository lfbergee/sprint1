import { actionTypes } from "./actionTypes";

const login = dispatch => dispatch({ type: actionTypes.AUTHENTICATE });

export const actions = {
  login
};
