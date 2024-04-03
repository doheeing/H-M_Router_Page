import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
  return (dispatch, getState) => {
    // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(authenticateActions.logIn({id, password}));
  };
}

function logout() {
  return (dispatch, getState) => {
    // dispatch({ type: "LOGOUT_SUCCESS" });
    dispatch(authenticateActions.logOut({}));
  };
}

export const authenticateAction = { login, logout };
