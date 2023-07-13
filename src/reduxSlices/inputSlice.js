import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputAdded(state, action) {
      if (action.payload === ".") {
        return state.includes(".") ? state : (state += action.payload);
      }

      state += action.payload;
      return state.length <= 2 ? parseFloat(state).toString() : state;
    },
    inputReplace(state, action) {
      console.log("replace");

      return action.payload;
    },
    inputReset(state, action) {
      return "0";
    },
  },
});

export const { inputAdded, inputReplace, inputReset } = inputSlice.actions;

export default inputSlice.reducer;
