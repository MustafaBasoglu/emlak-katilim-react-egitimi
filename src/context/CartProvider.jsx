import { useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./reducers/cartReducer";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function deleteFromCart(id) {
    dispatch({ type: "DELETE_FROM_CART", payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        total: state.total,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
