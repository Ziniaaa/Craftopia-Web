import React, { useState } from "react";

import DatePicker from "react-datepicker"; //月曆套件npm install react-datepicker
// import "react-datepicker/dist/react-datepicker.css"; // 引入樣式
import "../components/style_rsvCal.css"; // 引入樣式

import { zhTW } from "date-fns/locale"; // 引入繁體中文語系 npm install date-fns

export default function RsvCalendar() {

    const [selectedDate, setSelectedDate] = useState(null); // 用於儲存選擇的日期

    // 處理日期變化
    const handleDateChange = (date) => {
        setSelectedDate(date); // 設定選擇的日期
    };

    return (
        <>
            <div>
                <DatePicker
                    inline // 讓月曆常駐顯示
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    locale={zhTW} // 將語系設為繁體中文

                    minDate={new Date()} // 禁選過去日期
                />
            </div>

            {/* 顯示所選的日期 */}
            {/* <div className="selectedDateDisplay">
                <h3>您選擇的日期：</h3>
                {selectedDate ? (
                    <p>
                        {selectedDate.toLocaleDateString("zh-TW", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                ) : (
                    <p>尚未選擇日期</p>
                )}
            </div> */}
        </>
    )
}