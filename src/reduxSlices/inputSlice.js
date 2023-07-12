import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputAdded(state, action) {
      state += action.payload;
      return state;
    },
    inputUpdate(state, action) {
      return action.payload;
    },
    inputReset(state, action) {
      return "0";
    },
  },
});

export const { inputAdded, inputUpdate, inputReset } = inputSlice.actions;

export default inputSlice.reducer;
