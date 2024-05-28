import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

//! react componentleri kendine bağlı state ve props güncellendiğinde yeniden render olur!

const Modal = ({ title, children, setIsShowModal }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    console.log("modal DOM'a yüklendi!");

    const id = setInterval(()=>{
    i += 1;
    setCount(i);
    console.log(i);
    }, 1000)
    
    //* clean-up function - ekrandan kaldırıldığında çalışır
    return () => {
      console.log("modal DOM'dan kaldırıldı!");
      clearInterval(id);
    };
  }, []);

  return createPortal(
    <div className="modal d-inline-flex flex-column justify-content-center align-items-center">
      <div className="modal-content bg-dark z-3 position-relative w-50">
        <div className="modal-header">
          <h5 className="modal-title">{count}</h5>
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
      <div
        className="w-100 h-100 position-absolute top-0 left-0 bg-danger opacity-25 z-0"
        onClick={() => setIsShowModal(false)}
      ></div>
    </div>,
    document.getElementById("modals")
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setIsShowModal: PropTypes.func.isRequired,
};

export default Modal;
