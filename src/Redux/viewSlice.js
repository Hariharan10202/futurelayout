import { createSlice } from "@reduxjs/toolkit";

export const viewSlice = createSlice({
  name: "view",
  initialState: {
    view: false,
  },

  reducers: {
    updateView: (state, action) => {
      state.view = action.payload;
      // console.log(state.pending);
    },
  },
});

export const { updateView } = viewSlice.actions;

export default viewSlice.reducer;
