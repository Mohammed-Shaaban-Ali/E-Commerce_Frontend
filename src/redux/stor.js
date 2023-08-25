import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productsSlice from "./slices/productSlice";

const stor = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});

export default stor;
