import React from "react";
import propTypes from "prop-types";

const Modal = ({ handleCloseModal }) => {
    return (
        <>
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Feedback Submitted Successfully!</h1>

                    <p>Check your email for more details</p>

                    <a
                        href="#"
                        className="modal__close"
                        onClick={handleCloseModal}
                    >
                        &times;
                    </a>
                </div>
            </div>
        </>
    );
};

Modal.propTypes = {
    handleCloseModal: propTypes.func.isRequired,
};

export default Modal;
