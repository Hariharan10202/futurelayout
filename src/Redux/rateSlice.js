import { createSlice } from "@reduxjs/toolkit";

export const rateSlice = createSlice({
  name: "rate",
  initialState: {
    data: [],
  },

  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = rateSlice.actions;

export default rateSlice.reducer;
