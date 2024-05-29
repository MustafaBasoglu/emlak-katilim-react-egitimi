import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    product: {},
    theme: {},
    auth: {},
  },
});

export default store;
