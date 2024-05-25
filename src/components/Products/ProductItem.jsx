import "./ProductItem.css";

function ProductItem(props) {
  console.log(props.myName);
  console.log(props.title);
  console.log(props.img);
  console.log(props.price);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.img} />
      </div>
      <div className="product-info">
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
