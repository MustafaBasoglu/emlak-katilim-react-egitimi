import PropTypes from "prop-types";

function ProductInput(props) {
  const { label, type, placeholder, name, value, handleChange } = props;
  
  return (
    <div className="product-input">
      <label>{label}</label>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
}

ProductInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ProductInput;
