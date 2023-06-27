import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },

  reducers: {
    updateQuotes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateQuotes } = quoteSlice.actions;

export default quoteSlice.reducer;
