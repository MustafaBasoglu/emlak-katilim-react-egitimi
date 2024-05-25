function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          width={200}
          height={200}
        />
      </div>
      <div className="product-info">
        <strong className="product-title">Title</strong>
        <span className="product-price">500₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
