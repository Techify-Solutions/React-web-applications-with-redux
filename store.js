import { configureStore } from “@reduxjs/toolkit”;
import authReducer from “./slices/bugSlice”;

const store = configureStore({
  reducer: { bugs: bugReducer },
});

export default store;
