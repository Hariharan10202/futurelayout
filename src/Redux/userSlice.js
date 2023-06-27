import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "rates",
  initialState: {
    data: [],
    pending: false,
    error: false,
  },

  reducers: {
    updateStart: (state) => {
      state.pending = true;
      // console.log(state.pending);
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
      // console.log(state.pending);
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;

export default userSlice.reducer;
