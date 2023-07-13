import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    answerUpdated(state, action) {
      return action.payload;
    },
    answerReset(state, action) {
      return initialState;
    },
  },
});

export const { answerUpdated, answerReset } = answerSlice.actions;

export default answerSlice.reducer;
