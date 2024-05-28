import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevCartItems) => [product, ...prevCartItems]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart
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
