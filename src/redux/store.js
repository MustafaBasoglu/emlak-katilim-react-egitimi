import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: {},
    product: {},
    theme: {},
    auth: {},
  },
});


export default store;