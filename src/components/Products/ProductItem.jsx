import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.img} />
      </div>
      <div className="product-info">
        <strong className="product-title">{props.title.slice(0, 10)}...</strong>
        <p className="product-desc">{props.desc.slice(0, 50)}₺</p>
        <span className="product-price">{props.price}₺</span>
        <Button
          size="sm"
          type="danger"
          onClick={() => props.handleDeleteItem(props.id)}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductItem;
