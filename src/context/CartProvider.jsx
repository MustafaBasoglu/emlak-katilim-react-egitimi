// import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  //   const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{
        fullName: "Emin Başbayan",
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
