import { Fragment } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { addToCart, deleteFromCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import "./ProductItem.css";

function ProductItem(props) {
  const {
    id,
    image,
    title,
    description,
    price,
    handleDeleteItem,
    cart,
    quantity,
  } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <strong
          className="product-title"
          onClick={() => navigate(`/product/${id}`)}
          style={{
            cursor: "pointer",
          }}
        >
          {title.slice(0, 10)}...
        </strong>
        <p className="product-desc">{description.slice(0, 50)}₺</p>
        <span className="product-price">
          {price}₺ x {quantity}
        </span>

        {cart ? (
          <Button
            size="sm"
            type="danger"
            onClick={() => dispatch(deleteFromCart(id))}
          >
            DELETE FROM CART
          </Button>
        ) : (
          <Fragment>
            <Button
              size="sm"
              type="primary"
              className={"mb-2 mt-1"}
              onClick={() =>
                dispatch(addToCart({ id, image, title, description, price }))
              }
            >
              ADD TO CART
            </Button>
            <Button
              size="sm"
              type="danger"
              onClick={() => handleDeleteItem(id)}
            >
              DELETE
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func,
  id: PropTypes.number.isRequired,
  cart: PropTypes.bool,
  quantity: PropTypes.number,
};

export default ProductItem;
