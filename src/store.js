import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./reduxSlices/inputSlice";
import expressionSlice from "./reduxSlices/expressionSlice";

const store = configureStore({
  reducer: {
    input: inputSlice,
    expression: expressionSlice,
  },
});

export default store;
