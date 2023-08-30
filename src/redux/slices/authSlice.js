import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../service/authService";
import { toast } from "react-toastify";

const getUserFromLocalStorge = localStorage.getItem("normalUser")
  ? JSON.parse(localStorage.getItem("normalUser"))
  : null;

export const login = createAsyncThunk("users/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const register = createAsyncThunk(
  "users/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getWishList = createAsyncThunk(
  "users/getWishList",
  async (thunkAPI) => {
    try {
      return await authService.getWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCart = createAsyncThunk(
  "users/addCart",
  async (data, thunkAPI) => {
    try {
      return await authService.addCart(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCart = createAsyncThunk("users/getCart", async (thunkAPI) => {
  try {
    return await authService.getCart();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const removeProductCart = createAsyncThunk(
  "users/removeProductCart",
  async (id, thunkAPI) => {
    try {
      return await authService.removeProductCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateProductCartUsingQuantity = createAsyncThunk(
  "users/updateProductCartUsingQuantity",
  async (cartData, thunkAPI) => {
    try {
      return await authService.updateProductCartUsingQuantity(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const creatOrder = createAsyncThunk(
  "users/creatOrder",
  async (orderData, thunkAPI) => {
    try {
      return await authService.creatOrder(orderData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  user: getUserFromLocalStorge, //getUserFromLocalStorge,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.registerData = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(getWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.WishList = action.payload;
      })
      .addCase(getWishList.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })

      .addCase(addCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        if (state.isSuccess && state.cartProduct) {
          toast.success("product added successfully");
        }
      })
      .addCase(addCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError) {
          toast.error("product added failed");
        }
      })

      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userCartPrduct = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })

      .addCase(removeProductCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.removeCartPrduct = action.payload;
        if (state.isSuccess && state.removeCartPrduct) {
          toast.success("product deleted successfully");
        }
      })
      .addCase(removeProductCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(updateProductCartUsingQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductCartUsingQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.updateCartPrduct = action.payload;
        if (state.isSuccess && state.updateCartPrduct) {
          toast.success("product updated successfully");
        }
      })
      .addCase(updateProductCartUsingQuantity.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(creatOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(creatOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creatorder = action.payload;
        if (state.isSuccess && state.creatorder) {
          toast.success("ordered successfully");
        }
      })
      .addCase(creatOrder.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(resetState, () => initialState);
  },
});
export default authSlice.reducer;
