import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputAdded(state, action) {
      if (action.payload === "." && state.includes(".")) {
        return state;
      }

      state += action.payload;
      return state.replace(/^0+(?=\d)/, "");
    },
    inputReplace(state, action) {
      return action.payload;
    },
    inputRemoveLastOne(state, action) {
      if (state.length === 1) return "0";

      return state.substring(0, state.length - 1);
    },
    inputReset(state, action) {
      return initialState;
    },
  },
});

export const { inputAdded, inputReplace, inputRemoveLastOne, inputReset } =
  inputSlice.actions;

export default inputSlice.reducer;
