import ProductItem from "../components/Products/ProductItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems, total } = useSelector((state)=> state.cart);

  return (
    <div className="container cart-page mt-5">
      <h1 className="mb-4">Cart Page</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <ProductItem {...item} cart />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-end">Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      ) : (
        <h3>Sepette hiç ürün yok!</h3>
      )}
    </div>
  );
};

export default CartPage;
