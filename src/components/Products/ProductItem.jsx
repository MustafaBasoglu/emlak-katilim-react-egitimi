import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.img} />
      </div>
      <div className="product-info">
        <strong className="product-title">{props.title.slice(0, 10)}...</strong>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default ProductItem;
