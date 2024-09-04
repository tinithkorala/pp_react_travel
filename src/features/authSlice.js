import { createSlice } from "@reduxjs/toolkit";

import { logout, signIn, signUp, updateProfile, updateUserPassword } from "./thunks/auth.thunk";
import { REQUEST_STATUS } from "../configs/constants";

const initialState = {
  user: {},
  isAuthenticate: false,
  status: REQUEST_STATUS.IDLE,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = REQUEST_STATUS.IDLE;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
        state.user = action.payload.data.user;
        state.isAuthenticate = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.user = {};
        state.isAuthenticate = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
        state.user = action.payload.data.user;
        state.isAuthenticate = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.user = {};
        state.isAuthenticate = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
        state.user = {};
        state.isAuthenticate = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
        state.user.name = action.payload.data.user.name;
        state.user.email = action.payload.data.user.email;
        state.user.photo = action.payload.data.user.photo;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.error = action.payload;
      })
      .addCase(updateUserPassword.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
      })
      .addCase(updateUserPassword.fulfilled, (state) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.error = action.payload;
      })
  },
});

export const { resetStatus } = authSlice.actions;

export const getUser = (state) => state.auth.user;
export const getIsAuth = (state) => state.auth.isAuthenticate;
export const getStatus = (state) => state.auth.status;
export const getError = (state) => state.auth.error;

export default authSlice.reducer;
