import "./ProductItem.css";

function ProductItem() {
  const img = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Şapka";
  const price = 500;

  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={img}
        />
      </div>
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
