import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  return (
    <button className={`btn btn-${props.type} btn-${props.size}`}>
      Click!
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
};

export default Button;
