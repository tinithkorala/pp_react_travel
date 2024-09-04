import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../configs/constants";
import { tourCheckout } from "./thunks/booking.thunk";

const initialState = {
  bookings: [],
  checkoutData: {},
  status: REQUEST_STATUS.IDLE,
  error: null,
};

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tourCheckout.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
        state.error = null;
      })
      .addCase(tourCheckout.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.SUCCEEDED;
        state.checkoutData = action.payload.sessionData;
      })
      .addCase(tourCheckout.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAILED;
        state.error = action.payload;
      });
  },
});

export const getAllBookings = (state) => state.bookings.bookings;
export const getBookingStatus = (state) => state.bookings.status;
export const getBookingError = (state) => state.bookings.error;
export const getBookingCheckoutData = (state) => state.bookings.checkoutData;

export default bookingSlice.reducer;
