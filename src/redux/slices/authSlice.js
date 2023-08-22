import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorge = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const login = createAsyncThunk("users/login", async (user, thunkAPI) => {
  try {
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

const initialState = {
  user: getUserFromLocalStorge,
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
        state.user = null;
      })

      .addCase(resetState, () => initialState);
  },
});
export default authSlice.reducer;
