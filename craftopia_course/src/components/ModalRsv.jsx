import React from "react";
// import "../components/style_rsv.css";
import "../scss/_style_ModalRsv .scss";


const ModalRsv = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;  // 如果 Modal 沒有開啟，不渲染任何東西

    
    return (
        <div className="modal-overlay" onClick={onClose}  >
            {/* ↑若點擊窗外要觸發關閉，加上 onClick={onClose} */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-btn" onClick={onClose}></button> */}
                {children}
            </div>
        </div>
    );
};

export default ModalRsv;