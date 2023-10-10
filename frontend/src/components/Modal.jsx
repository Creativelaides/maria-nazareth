import { PropTypes } from 'prop-types';
import { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose && onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    }

export default Modal;
