import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-bg">
            <div className="modal-content">
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "transparent",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "#888"
                    }}
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;