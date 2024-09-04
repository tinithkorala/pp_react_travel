import { urlAPIHelper } from "../utils/urlHelper";

export const REQUEST_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

export const API_URLS = {
  AUTH: {
    LOGIN: urlAPIHelper(["users", "login"]),
    SIGNUP: urlAPIHelper(["users", "signup"]),
    LOGOUT: urlAPIHelper(["users", "logout"]),
    UPDATEME: urlAPIHelper(["users", "updateMe"]),
    UPDATEPASS: urlAPIHelper(["users", "updateMyPassword"]),
  },
  TOURS: {
    BASE: urlAPIHelper(["tours"]),
  },
  BOOKINGS: {
    BASE: urlAPIHelper(["bookings"]),
    CHECKOUT: urlAPIHelper(["bookings", "checkout-session"]),
  },
};

export const INITIAL_USER = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export const ROLES = {
  USER: "user",
  GUIDE: "guide",
  LEADGUIDE: "lead-guide",
  ADMIN: "admin",
};
