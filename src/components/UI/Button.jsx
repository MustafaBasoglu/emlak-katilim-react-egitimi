import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  console.log(props);
  const classNames = `btn btn-${props.type} btn-${props.size}`;

  return <button className={classNames}>{props.children}</button>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  children: PropTypes.node
};

export default Button;
