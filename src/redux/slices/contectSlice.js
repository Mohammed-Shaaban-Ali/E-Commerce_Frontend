import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contectService from "../service/contectService";

export const addComment = createAsyncThunk(
  "comment/addComment",
  async (comment, thunkAPI) => {
    try {
      return await contectService.addComment(comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");
const initialState = {
  comment: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const contectSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comment = action.payload;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(resetState, () => initialState);
  },
});
export default contectSlice.reducer;
