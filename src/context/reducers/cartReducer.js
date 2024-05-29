export const initialState = {
  cartItems: [],
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      let newCartItems;
      if (findCartItem) {
        newCartItems = state.cartItems.map((item) =>
          item.id === findCartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartItems = [{ ...action.payload, quantity: 1 }, ...state.cartItems];
      }
      const newTotal = newCartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cartItems: newCartItems,
        total: newTotal,
      };
    }
    case "DELETE_FROM_CART": {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      const newTotal = newCartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cartItems: newCartItems,
        total: newTotal,
      };
    }
    default:
      return state;
  }
}
