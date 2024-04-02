function login(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout() {
    return (dispatch, getState) => {
      dispatch({ type: "LOGOUT_SUCCESS" });
    };
  }

export const authenticateAction = { login, logout };
