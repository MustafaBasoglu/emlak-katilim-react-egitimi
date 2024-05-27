import PropTypes from "prop-types";

//! react componentleri kendine bağlı state ve props güncellendiğinde yeniden render olur!

const Modal = ({ title, children, isShowModal, setIsShowModal }) => {
  if (!isShowModal) {
    return null;
  }

  return (
    <div className="modal d-inline-block">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <p>{children}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsShowModal(false)}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isShowModal: PropTypes.bool.isRequired,
  setIsShowModal: PropTypes.func.isRequired,
};

export default Modal;
