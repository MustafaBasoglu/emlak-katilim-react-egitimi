import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.length > 0 ? <div className="row">
        {cartItems.map((item) => (
          <div className="col-3" key={item.id}>
            <ProductItem  {...item} cart />
          </div>
        ))}
      </div> : <h3>Sepette hiç ürün yok!</h3> }
      
    </div>
  );
};

export default CartPage;
