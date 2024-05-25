import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  return <button className={`btn btn-${props.type}`}>Click!</button>;
}

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
