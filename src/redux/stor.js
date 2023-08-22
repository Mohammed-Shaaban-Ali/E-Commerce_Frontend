import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const stor = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default stor;
