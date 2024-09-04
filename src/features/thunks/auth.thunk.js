import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URLS } from "../../configs/constants";

const signIn = createAsyncThunk("auth/signIn", async (user, thunkAPI) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(API_URLS.AUTH.LOGIN, requestOptions);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Try again later: ${errorResponse.message}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const signUp = createAsyncThunk("auth/signUp", async (user, thunkAPI) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(API_URLS.AUTH.SIGNUP, requestOptions);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Try again later: ${errorResponse.message}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(API_URLS.AUTH.LOGOUT, requestOptions);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Try again later: ${errorResponse.message}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (userProfileData, thunkAPI) => {
    try {
      const requestOptions = {
        method: "PATCH",
        // headers: { 'Content-Type': 'multipart/form-data', },
        body: userProfileData,
      };
      const response = await fetch(API_URLS.AUTH.UPDATEME, requestOptions);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Try again later: ${errorResponse.message}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async (userPasswordData, thunkAPI) => {
    try {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPasswordData),
      };
      const response = await fetch(API_URLS.AUTH.UPDATEPASS, requestOptions);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Try again later: ${errorResponse.message}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { signIn, signUp, logout, updateProfile, updateUserPassword };
