import { useState } from "react";
import "../components/style_showQa.css";

export default function ShowQa() {


    // 可以修改資料的方式
    const [qaData, setQaData] = useState([
        {
            id: 1,
            question: '需要自備工具嗎？',
            ans: '上課教室提供個人獨立金工桌，以及整套的金工工具設備供學員使用，不需要自備任何工具，僅需攜帶一顆愉快的心即可！',
            isClicked: false,
        },
        {
            id: 2,
            question: '我沒有經驗也可以報名嗎？',
            ans: '手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。',
            isClicked: false,
        },
        {
            id: 3,
            question: '完成後的成品多久可以拿？',
            ans: '手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。',
            isClicked: false,
        },
        {
            id: 4,
            question: '報名費有包含材料費嗎？',
            ans: '手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。',
            isClicked: false,
        },
        
    ]);


    // 建立切換 雙向展開收合 的函式，但會有一點暈
    // const toggleClick = (id) => {
    //     setQaData(qaData.map((data) => {
    //         return {
    //             ...data,
    //             isClicked: data.id === id ? !data.isClicked : false,
    //         };
    //     }))
    // }




    // toDoList的方式：適合多選，可以一次展開多個選項，不會自動收合
    const toggleClick = (id) => {
        setQaData(qaData.map((data) => {
            return data.id === id
                ? { ...data, isClicked: !data.isClicked }
                : data
        }))
    }


    console.log(qaData);


    return (
        <>
            {
                qaData.map((item, index) => {
                    console.log(index);
                    return (

                        <li className={`list-row ${index % 2 === 1 ? 'light' : ''}`} key={item.id}>
                            <div>
                                <p className="quest-mark">?</p>
                            </div>
                            <div className="QAset" >
                                <div className={item.isClicked ? 'question show' : 'question'} onClick={(e) => {
                                        e.stopPropagation(); // 防止冒泡
                                    toggleClick(item.id);}}>
                                    <p>{item.question}</p>

                                    <div className={item.isClicked ? 'icon-arrow show' : 'icon-arrow'}>
                                        <img className="QA-arrowDown" src="./images/type=arrowDown_bold.svg" alt="" />
                                    </div>
                                </div>
                                <div className={item.isClicked ? 'ansWrap show' : 'ansWrap'}>

                                    <div className="answer">
                                        <p>
                                            {item.ans}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </li>

                    )
                })
            }
        </>
    )
}

