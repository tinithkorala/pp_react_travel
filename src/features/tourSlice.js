import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { REQUEST_STATUS, API_URLS } from "../configs/constants";

// Fetch tours
export const fetchAllTours = createAsyncThunk(
  "tours/fetchAllTours",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API_URLS.TOURS.BASE);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Failed to fetch tours: ${errorResponse.message}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  tours: [],
  status: REQUEST_STATUS.IDLE,
  error: null,
};

export const tourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTours.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
        state.error = null;
      })
      .addCase(fetchAllTours.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
        state.tours = action.payload.data.data;
      })
      .addCase(fetchAllTours.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.error = action.payload;
      });
  },
});

// Get data
export const selectAllTours = (state) => state.tours.tours;
export const getToursStatus = (state) => state.tours.status;
export const getToursError = (state) => state.tours.error;

export default tourSlice.reducer;
