import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const findCartItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (findCartItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === findCartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems = [{ ...payload, quantity: 1 }, ...state.cartItems];
      }

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    deleteFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
