import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    logIn(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
    logOut(state, action) {
      state.authenticate = false;
    },
  },
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;

// function authenticateReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         id: payload.id,
//         password: payload.password,
//         authenticate: true,
//       };
//     case "LOGOUT_SUCCESS":
//       return { ...state, authenticate: false };
//     default:
//       return { ...state };
//   }
// }

// export default authenticateReducer;
