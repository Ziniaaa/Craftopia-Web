import { useState } from "react";
import "../scss/_style_MyShareBox.scss";
import ModalReview from "./ModalReview";

export default function ShareCard({ expInfoName, imgSrc, avatarSrc, levelSrc, shareTime, expItem, expTxt }) {
    
    // 控制 ModalReview 開啟狀態
    const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);

    const handleOpenModalReview = () => {
        setIsModalReviewOpen(true);  // 開啟 ModalReview
    };

    const handleCloseModalReview = () => {
        setIsModalReviewOpen(false);  // 關閉 ModalReview
    };


    return (
        <div className="Exp" onClick={handleOpenModalReview}>
            {/* ModalReview 元件 */}
            <ModalReview isOpen={isModalReviewOpen} onClose={handleCloseModalReview} />
            <div className="expPic">
                <img src={imgSrc} alt="" />
            </div>
            <div className="expContent">
                <div className="expInfo">
                    <img src={avatarSrc} alt="" />
                    <p>{expInfoName}</p>
                    <img src={levelSrc} alt="" />
                </div>
                <div className="expDate">
                    <p>{shareTime}</p>
                    {/* <span>‧</span> */}
                    <p className='expItem'>課程項目：{expItem}</p>
                </div>
                <p className="expTxt">{expTxt}</p>
            </div>
        </div>

    )
}