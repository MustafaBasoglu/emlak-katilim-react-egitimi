import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <ProductItem key={item.id} />
      ))}
    </div>
  );
};

export default CartPage;
