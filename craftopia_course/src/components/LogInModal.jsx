import React, { useState } from "react";
import "../scss/style_review.scss";


const ModalReview = ({ isOpen, onClose }) => {

    if (!isOpen) return null;  // 如果 Modal 沒有開啟，不渲染任何東西

    return (
        <>
            <div className="logInModal-overlay" onClick={onClose} >
                <section id="logInWrap">
                <img src="./images/icons-X.svg" alt="" id="iconX" onClick={onClose}/>

                </section>
            </div>
        </>

    );
};


export default ModalReview;