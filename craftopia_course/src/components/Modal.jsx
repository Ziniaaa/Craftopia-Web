import React, { useEffect, useState } from "react";
// import "../components/style_rsv.css";
import "../scss/_style_rsv .scss";
import RsvCalendar from "./RsvCalendar"; // 引入 RsvCalendar 元件


const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;  // 如果 Modal 沒有開啟，不渲染任何東西

    // 控制 Modal 開啟狀態
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);  // 開啟 Modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // 關閉 Modal
    };

    //人數按鈕
    const [adultCount, setAdultCount] = useState(0); // 成人人數
    const [childCount, setChildCount] = useState(0); // 孩童人數

    // 處理成人人數增加/減少
    const handleAdultCount = (operation) => {
        setAdultCount((prev) =>
            operation === "+" ? prev + 1 : Math.max(prev - 1, 0)
        );
    };
    // 處理孩童人數增加/減少
    const handleChildCount = (operation) => {
        setChildCount((prev) =>
            operation === "+" ? prev + 1 : Math.max(prev - 1, 0)
        );
    };

    //Modal課程金額計算
    const [selectedCourse, setSelectedCourse] = useState(null); // 儲存選擇的課程

    const courseOption = {
        c1: {
            option: "初階｜鍛敲戒指",
            adultFee: 1500,
            childFee: 1200,
        },
        c2: {
            option: "進階｜造型戒指",
            adultFee: 1900,
            childFee: 1600,
        }
    }

    // 計算總金額
    const calculateTotalFee = () => {
        if (!selectedCourse) return 0; // 若未選擇課程，金額為 0
        const course = courseOption[selectedCourse];
        return course.adultFee * adultCount + course.childFee * childCount;
    };

    // 更新選擇的課程
    const handleCourseSelect = (courseKey) => {
        setSelectedCourse(courseKey);
    };

    // 計算金額
    const totalFee = calculateTotalFee();

    //選擇課程日期
    const [selectedDate, setSelectedDate] = useState(null);


    //選擇課程時段
    const [selectedTime, setSelectedTime] = useState(null); // 儲存選擇的時段

    const TimeOption = {
        t1: '10:00~12:00',
        t2: '12:00~14:00',
        t3: '14:00~16:00',
        t4: '16:00~18:00',
        t5: '18:00~20:00',
        t6: '20:00~22:00',
    }

    const handleTimeSelect = (timeKey) => {
        setSelectedTime(timeKey);
    };

    // 按下「下一步」檢查條件
    const [showTooltip, setShowTooltip] = useState(false);
    const handleNextStep = () => {
        if (!selectedCourse || (adultCount === 0 && childCount === 0) || !selectedDate || !selectedTime) {
            setShowTooltip(true);
            return;
        }
        setShowTooltip(false);
        handleOpenModalPay();
    };
    // 使用 useEffect 監聽條件變化
    useEffect(() => {
        if (
            selectedCourse &&
            (adultCount > 0 || childCount > 0) &&
            selectedDate &&
            selectedTime
        ) {
            setShowTooltip(false); // 自動隱藏 tooltip
        }
    }, [selectedCourse, adultCount, childCount, selectedDate, selectedTime]);

    return (
        <div className="modal-overlay" onClick={onClose}  >
            {/* ↑若點擊窗外要觸發關閉，加上 onClick={onClose} */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-btn" onClick={onClose}></button> */}
                <div className="lightBoxWrap">
                    <div className="header">
                        <h3 className="topTitle">選擇預約內容</h3>
                        <button id="iconX" onClick={onClose}></button>
                        {/* <img src="./images/icons-X.svg" alt="" id="iconX" /> */}
                    </div>
                    <div className="content">
                        <section className="rsvS-1">
                            <div className="rsvcontent">
                                <h3>選擇課程方案</h3>
                                <p className={selectedCourse === "c1" ? "selected" : ""}
                                    onClick={() => handleCourseSelect("c1")}>初階 | 鍛敲戒指</p>
                                <p className={selectedCourse === "c2" ? "selected" : ""}
                                    onClick={() => handleCourseSelect("c2")}>進階 | 造型戒指</p>
                            </div>
                            <hr />
                            <div className="rsvcount">
                                <h3>選擇報名人數</h3>
                                <div>成人 (18歲以上)
                                    <span>
                                        <button id="rsvBtnAdultSub" onClick={() => handleAdultCount("-")}>－</button>
                                        <p id="rsvAdultCount">{adultCount}</p>
                                        <button id="rsvAdultAdd" onClick={() => handleAdultCount("+")}>＋</button>
                                    </span>
                                </div>
                                <div>孩童 (12 ~ 17歲)
                                    <span>
                                        <button id="rsvBtnChildSub" onClick={() => handleChildCount("-")}>－</button>
                                        <p id="rsvChildCount">{childCount}</p>
                                        <button id="rsvChildAdd" onClick={() => handleChildCount("+")}>＋</button>
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="rsvDate">
                            <h3>選擇預約日期</h3>
                            <div className="calendar-wrapper">
                                <RsvCalendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
                            </div>
                        </section>
                        <section className="rsvS-3">
                            <div className="rsvTime">
                                <h3>選擇課程時段</h3>
                                <ul>
                                    <li className={selectedTime === "t1" ? "selected" : ""}
                                        onClick={() => handleTimeSelect("t1")}>10:00~12:00</li>
                                    <li className={selectedTime === "t2" ? "selected" : ""}
                                        onClick={() => handleTimeSelect("t2")}>12:00~14:00</li>
                                    <li className={selectedTime === "t3" ? "selected" : ""}
                                        onClick={() => handleTimeSelect("t3")}>14:00~16:00</li>
                                    <li className={selectedTime === "t4" ? "selected" : ""}
                                        onClick={() => handleTimeSelect("t4")}>16:00~18:00</li>
                                    <li className={selectedTime === "t5" ? "selected" : ""}
                                        onClick={() => handleTimeSelect("t5")}>18:00~20:00</li>
                                    <li className={selectedTime === "t6" ? "selected" : ""}
                                        onClick={() => handleTimeSelect("t6")}>20:00~22:00</li>
                                </ul>
                            </div>
                            <div id="FeeNext">
                                <div className="totalFee">金額小計
                                    <span id="rsvTolFee">${totalFee}</span>
                                </div>
                                <button className="nextStep" onClick={handleNextStep}>下一步

                                    {/* Tooltip 提示 */}
                                    {showTooltip && (
                                        <div className="toolTip">
                                            <p>每個項目皆需要選取喔!</p>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;