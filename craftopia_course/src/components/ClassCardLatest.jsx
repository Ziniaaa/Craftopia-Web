import { useState } from "react";
import Hearttoggle from "./Hearttoggle";
import "../scss/_style_ClassCardLatest.scss";


// 變數名稱大家可以改成寫死的文字或是自己的資料


function ClassCardLatest() {

    const classCards = [
        {
            id: 1,
            level: "入門",
            duration: "3",
            courseName: "【陶藝小酒杯】『土斯工作坊』手作陶杯體驗課",
            storeName: "土斯工作坊",
            price: "1290",
            img: "./images/course-card-pic-1.jpg",
        },
        {
            id: 2,
            level: "進階",
            duration: "4",
            courseName: "低調奢華名片夾─從無到有自己製作",
            storeName: "Royal Leather",
            price: "1980",
            img: "./images/course-card-pic-2.jpg",
        },
        {
            id: 3,
            level: "入門",
            duration: "3",
            courseName: "創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課",
            storeName: "草樹工作坊",
            price: "3800",
            img: "./images/course-card-pic-3.jpg",
        },
        {
            id: 4,
            level: "入門",
            duration: "2",
            courseName: "《真皮老鋪》皮革文件夾手作課程 / DIY / 適合上班族、情侶、社團",
            storeName: "真皮老鋪",
            price: "1800",
            img: "./images/course-card-pic-4.jpg",
        }
    ];


    return (
        <>
            {
                classCards.map((card) => (
                    <div key={classCards.id} className="classCard">
                        <figure className="classPhoto">
                            <a href="#">
                                <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                                <img className="photo" src={card.img} alt="" />
                                <div className="tagHotorNew ">
                                    <img src="./images/labels-hot.svg" alt="" />
                                    <img src="./images/labels-new.svg" alt="" />
                                </div>
                            </a>
                        </figure>
                        <div className="classTag">
                            <p className="classLevel">{card.level}</p>
                            <p className="classTime">{card.duration}hr</p>
                        </div>
                        <div className="classTitle">
                            <h3><a href="#">{card.courseName}</a></h3>
                            <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                        </div>
                        <div className="classPrice">
                            <p className="classStoreName"><a href="#">{card.storeName}</a></p>
                            <p className="price">$ {card.price}</p>
                        </div>
                    </div>
                ))
            }

        </>
    );
}
export default ClassCardLatest