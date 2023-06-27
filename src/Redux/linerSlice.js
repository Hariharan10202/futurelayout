import { createSlice } from "@reduxjs/toolkit";

export const linerSlice = createSlice({
  name: "liner",
  initialState: {
    data: [],
  },

  reducers: {
    updateLiner: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateLiner } = linerSlice.actions;

export default linerSlice.reducer;
