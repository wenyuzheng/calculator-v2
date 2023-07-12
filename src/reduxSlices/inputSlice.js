import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputUpdate(state, action) {
      state = action.payload;
    },
    inputReset(state, action) {
      state = "0";
    },
  },
});

export const { inputUpdate, inputReset } = inputSlice.actions;

export default inputSlice.reducer;
