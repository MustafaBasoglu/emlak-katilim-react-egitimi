import PropTypes from "prop-types";

const Spinner = ({ isShowLoading, className }) => {
  if (!isShowLoading) {
    return null;
  }

  return (
    <div className={`spinner-border text-info ${className}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {
  isShowLoading: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Spinner;
