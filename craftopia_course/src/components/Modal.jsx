import React from "react";
// import "./Modal.css"; // 如果你有單獨的樣式檔案
import "../components/style_rsv.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;  // 如果 Modal 沒有開啟，不渲染任何東西

    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-btn" onClick={onClose}></button> */}
                {children}
            </div>
        </div>
    );
};

export default Modal;