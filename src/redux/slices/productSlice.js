import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../service/productsService";
import { toast } from "react-toastify";

export const getProducts = createAsyncThunk(
  "Products/getProducts",
  async (Data, thunkAPI) => {
    try {
      return await productsService.getProducts(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishList = createAsyncThunk(
  "Products/addToWishList",
  async (prodId, thunkAPI) => {
    try {
      return await productsService.addToWishList(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getsingleProduct = createAsyncThunk(
  "Products/getsingleProduct",
  async (prodId, thunkAPI) => {
    try {
      return await productsService.getsingleProduct(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRating = createAsyncThunk(
  "Products/addRating",
  async (data, thunkAPI) => {
    try {
      return await productsService.addRating(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");
const initialState = {
  products: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(addToWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addwishlist = action.payload;
        state.message = "Product Added To Wishlist";
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getsingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getsingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(getsingleProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(addRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rating = action.payload;
        if (state.isSuccess && state.rating) {
          toast.success("Rating added successfully");
        }
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error(state.message);
        }
      })

      .addCase(resetState, () => initialState);
  },
});
export default productSlice.reducer;
