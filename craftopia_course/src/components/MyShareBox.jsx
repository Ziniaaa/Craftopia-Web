import ShareCard from "./ShareCard";
import "../scss/_style_MyShareBox.scss";

export default function MyShareBox() {

    const shareData = [
        {
            expInfoName: "文仔",
            imgSrc: "./images/reviewPic1.jpg",
            avatarSrc: "./images/exp-id-pic-1.png",
            levelSrc: "./images/icon-tag/tag-stoneLV.svg",
            shareTime: "2024 年 12 月 13 日",
            expItem: "Overloading 戒指 | 純銀 | 送禮自用",
            expTxt: "市面上的評論幾乎都在3行內結束，可能也跟使用者的習慣有關，長篇一點的可以用...藏起來像下面那樣?。老師很讚，推推",
        },
        {
            expInfoName: "二郎",
            imgSrc: "./images/reviewPic2.jpg",
            avatarSrc: "./images/exp-id-pic-1.png",
            levelSrc: "./images/icon-tag/tag-stoneLV.svg",
            shareTime: "2024 年 12 月 11 日",
            expItem: "Overloading 戒指 | 純銀 | 送禮自用",
            expTxt: "一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！",
        }
    ];

    return (
        <div className="newestExp">
            {shareData.map((card, index) => (
                <ShareCard  key={index} {...card} />
            ))}
            
            {/* <img src="./images/HrLine_rec.svg" alt="" className="hrline" /> */}


        </div>
    )
}