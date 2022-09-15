import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSclice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    signin(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSclice.actions;

export const store = configureStore({
  reducer: authSclice.reducer,
});
