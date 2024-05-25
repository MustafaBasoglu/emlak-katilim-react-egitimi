import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const classNames = `btn btn-${props.type} btn-${props.size}`;
  
  return <button className={classNames}>Click!</button>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
};

export default Button;
