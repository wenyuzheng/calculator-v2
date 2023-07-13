import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const expressionSlice = createSlice({
  name: "expression",
  initialState,
  reducers: {
    expressionAdded(state, action) {
      state += action.payload;
      return state;
    },
    expressionReset(state, action) {
      return "";
    },
  },
});

export const { expressionAdded, expressionReset } = expressionSlice.actions;

export default expressionSlice.reducer;
