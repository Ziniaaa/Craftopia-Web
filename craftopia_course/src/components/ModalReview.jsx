import React, { useState } from "react";
import "../scss/_style_ModalReview.scss";


const ModalReview = ({ isOpen, onClose }) => {

    const [isThisButtonActive, setIsThisButtonActive] = useState(true);

    const slides = [
        {
            id: 1,
            reviewImage: "./images/reviewPic1.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "文仔",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 12 月 13 日",
            courseName: "Overloading 戒指 | 純銀 | 送禮自用",
            courseId: "c01",
            expText: "市面上的評論幾乎都在3行內結束，可能也跟使用者的習慣有關，長篇一點的可以用...藏起來像下面那樣?。老師很讚，推推",

        },
        {
            id: 2,
            reviewImage: "./images/reviewPic2.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "二郎",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 12 月 11 日",
            courseName: "Overloading 戒指 | 純銀 | 送禮自用",
            courseId: "c01",
            expText: "一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！",
        },
        {
            id: 3,
            reviewImage: "./images/reviewPic3.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "三郎",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 11月 13 日",
            courseName: "【體驗】一日金工體驗/金工手作/情侶對戒",
            courseId: "c02",
            expText: "參加金工情侶對戒DIY課程是一次難忘的體驗。原本以為只是簡單的手作，但實際操作後才發現需要大量的細心與耐心。從選擇材料到設計樣式，再到反覆的打磨與拋光，每一步都充滿挑戰，也讓我更珍惜這份手作的意義。在製作過程中，我和另一半一起解決問題、互相鼓勵，感受到彼此的默契與愛意。最終完成的戒指雖然帶著些許手作的痕跡，但正是這些不完美，讓它成為獨一無二的象徵。這次課程不僅留下了實體的紀念，更是一份充滿回憶與心意的禮物。",
        },
        {
            id: 4,
            reviewImage: "./images/reviewPic4.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "四郎",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 10 月 31 日",
            courseName: "Overloading 戒指 | 純銀 | 送禮自用",
            courseId: "c01",
            expText: "親手打造專屬戒指，從零開始學習金工技巧，成品讓我好有成就感！",
        },
        {
            id: 5,
            reviewImage: "./images/reviewPic5.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "伍擺",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 10 月 22 日",
            courseName: "【體驗】一日金工體驗/金工手作/情侶對戒",
            courseId: "c02",
            expText: "金工DIY課程讓我體驗到手作的樂趣與挑戰。從選材、打磨到完成，每一步都需要專注與耐心。最感動的是親手為另一半製作專屬戒指，那份心意無法用言語形容。成品雖不完美，但更顯珍貴！",
        },
        {
            id: 6,
            reviewImage: "./images/reviewPic6.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "小六",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 10 月 12 日",
            courseName: "◎新年招財◎許願寶石戒指體驗課",
            courseId: "c03",
            expText: "今天參加金工戒指DIY課程，真是令人難忘的體驗！老師細心講解每個步驟，從銼片、焊接到拋光，讓我這個新手也能順利完成。過程中雖然手忙腳亂，還不小心燙到手指，但看著一個個工序逐漸成形，特別有趣。最後戴上自己親手打造的戒指，不僅展現獨特風格，更充滿意義。這堂課不只學到技術，還體會到手作的樂趣！",
        },
        {
            id: 7,
            reviewImage: "./images/reviewPic7.jpg",
            idPic: "./images/exp-id-pic-1.png",
            idName: "柒柒",
            idStoneLv: "./images/tag-stoneLV.svg",
            expDate: "2024 年 10 月 13 日",
            courseName: "【體驗】一日金工體驗/金工手作/情侶對戒",
            courseId: "c02",
            expText: "親手打造專屬對戒，過程雖繁瑣但充滿成就感！每個細節都融入心意，獨一無二。",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(slides[0]); // 預設顯示第一張照片
    const [slide, setSlide] = useState(slides[0]);
    const [visibleStart, setVisibleStart] = useState(0); // 小照片顯示起始索引
    const visibleCount = 5; // 畫面可見的小照片數量

    // 僅顯示尺課程或顯示店家所有課程評論
    const getDisplayCourse = (slide) => {
        if (isThisButtonActive) {
            return slide.courseId === "c01" ? "block" : "none";
        }
        return "block";
    };

    // 左右按鈕處理
    const handlePrev = () => {
        if (visibleStart > 0) {
            setVisibleStart(visibleStart - 1);
        }
    };

    const handleNext = () => {
        if (visibleStart < slides.length - visibleCount) {
            setVisibleStart(visibleStart + 1);
        }
    };
    if (!isOpen) return null;  // 如果 Modal 沒有開啟，不渲染任何東西

    return (
        <>
            <div className="modalReview-overlay" onClick={onClose} >
                {/* ↑若點擊窗外要觸發關閉，加上 onClick={onClose} */}
                <div className="modalReview-content" onClick={(e) => e.stopPropagation()}>
                    <section className="reviewWrap">
                        <div className="reviewContent">
                            <div className="rvwLeft">
                                <figure><img src={currentSlide.reviewImage} alt={`Slide ${currentSlide.id}`} className="main-photo" /></figure>

                            </div>
                            <div className="rvwRight">
                                <img src="./images/icons-X.svg" alt="" id="iconX" onClick={onClose}/>
                                <div className="row1">
                                    <figure className="idPic"><img src={currentSlide.idPic} alt="" /></figure>
                                    <p className="idName">{currentSlide.idName}</p>
                                    <figure className="stoneLv"><img src={currentSlide.idStoneLv} alt="" /></figure>
                                </div>
                                <div className="row2">
                                    <p>{currentSlide.expDate}</p>
                                    <span>‧</span>
                                    <p>{currentSlide.courseName}</p>
                                </div>
                                <article className="row3">{currentSlide.expText}</article>
                            </div>
                        </div>

                        <div className="reviewSubContent">
                            <div className="switchBtn">
                                <button
                                    className={isThisButtonActive ? "rvwBigBtn" : "rvwSmBtn"}
                                    onClick={() => setIsThisButtonActive(true)}
                                >
                                    目前的<br />課程評價
                                </button>
                                <button
                                    className={!isThisButtonActive ? "rvwBigBtn" : "rvwSmBtn"}
                                    onClick={() => setIsThisButtonActive(false)}
                                >
                                    查看店家<br />所有評價
                                </button>
                            </div>
                            {/* 小照片區 */}
                            <div className="slideshow">
                                <button className="arrow-btn left" onClick={handlePrev} disabled={visibleStart === 0}>
                                    ◀
                                </button>
                                <div className="thumbnail-container">
                                    <div className="thumbnail-wrap"
                                        style={{
                                            transform: `translateX(-${visibleStart * 110}px)`, // 每個縮略圖寬度為 110px（包含間距）
                                        }}
                                    >
                                        {slides.map((slide) => (
                                            <div
                                                key={slide.id}
                                                className={`thumbnail ${slide.id === currentSlide.id ? "active" : ""} ${slide.courseId}`}
                                                onClick={() => setCurrentSlide(slide)}
                                                style={{ display: getDisplayCourse(slide) }}
                                            >
                                                <img src={slide.reviewImage} alt={`Thumbnail ${slide.id}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    className="arrow-btn right"
                                    onClick={handleNext}
                                    disabled={visibleStart >= slides.length - visibleCount}
                                >
                                    ▶
                                </button>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

        </>

    );
};


export default ModalReview;