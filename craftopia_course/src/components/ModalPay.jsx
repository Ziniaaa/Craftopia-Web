import React from "react";
import "../scss/_style_ModalPay.scss";


const ModalPay = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;  // 如果 ModalPay 沒有開啟，不渲染任何東西

        
    return (
        <div className="modalPay-overlay">
            <div className="modalPay-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-btn" onClick={onClose}></button> */}
                {children}
            </div>
        </div>
    );
};

export default ModalPay;