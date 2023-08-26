import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productsSlice from "./slices/productSlice";
import blogSlice from "./slices/blogSlice";
import contectSlice from "./slices/contectSlice";

const stor = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    blog: blogSlice,
    comment: contectSlice,
  },
});

export default stor;
