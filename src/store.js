import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./reduxSlices/inputSlice";

const store = configureStore({
  reducer: {
    input: inputSlice,
  },
});

export default store;
