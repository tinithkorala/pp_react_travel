import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URLS } from "../../configs/constants";

const tourCheckout = createAsyncThunk(
  "bookings/tourCheckout",
  async (tourId, thunkAPI) => {
    try {
      const response = await fetch(`${API_URLS.BOOKINGS.CHECKOUT}/${tourId}`);
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

export { tourCheckout };
