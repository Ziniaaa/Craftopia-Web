import { useEffect, useState } from 'react'
import $ from 'jquery'
// import '../css/style.css'
import Modal from "./components/Modal"; // 引入 Modal 元件
import ModalPay from "./components/ModalPay"; // 引入 ModalPay 元件
import ShowQa from "./components/ShowQa"; // 引入 ShowQa 元件
import AOS from 'aos';
import 'aos/dist/aos.css'; //載入node modules中的套件前面不加./
import RsvCalendar from "./components/RsvCalendar"; // 引入 RsvCalendar 元件
import { SlArrowDown } from "react-icons/sl";

function App() {
  // 點圖切換首圖
  const [selectedPhoto, setSelectedPhoto] = useState(1); // 儲存選擇的課程
  const handlePhotoSelect = (id, url) => {
    setSelectedPhoto({ id, url });
  };
  // 初始化選擇第一張照片
  useEffect(() => {
    setSelectedPhoto(photoOption.p1); // 預設為第一張
  }, []); // 空陣列表示只執行一次
  const photoOption = {
    p1: { id: 'coursePhoto-1', url: './images/courseImg-1.JPG' },
    p2: { id: 'coursePhoto-2', url: './images/courseImg-2.JPG' },
    p3: { id: 'coursePhoto-3', url: './images/courseImg-3.JPG' },
  };

  //愛心icon toggle
  useEffect(() => {
    $('#heart').on('click', function () {
      const img = $(this).find('img');
      const currentSrc = img.attr('src');
      const isFilled = currentSrc.includes('heart-fill');
      const newSrc = isFilled
        ? './images/icon-heart.svg'
        : './images/icon-heart-fill.svg';

      // 先立即更新圖片
      img.attr('src', newSrc);

      // 如果切換到 icon-heart-fill.svg，加入動畫
      if (!isFilled) {
        img.addClass('animate');

        // 動畫結束後移除動畫類名
        setTimeout(() => {
          img.removeClass('animate');
        }, 900); // 動畫時長與 jello-horizontal 一致
      }
    });
  },)

  //控制閱讀更多(jQ)
  useEffect(() => {
    $('.course-readmore').on('click', function () {
      $('.course-content-clip').addClass('content-clip-open');
      $('.course-readmore').hide();
    });
  }, [])

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

  //QA開關(jQuery)
  useEffect(() => {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('#buyNow').stop().fadeIn("fast")
      } else {
        $('#buyNow').fadeOut()
      }
    });
  })
  useEffect(() => {
    $('#Q1').on('click', function () {
      $('#A1').slideToggle().stop();
    });
    $('#Q2').on('click', function () {
      $('#A2').slideToggle();
    });
    $('#Q3').on('click', function () {
      $('#A3').slideToggle();
    });
    $('#Q4').on('click', function () {
      $('#A4').slideToggle();
    });
  });

  // ModalPay開關控制
  const [isModalPayOpen, setIsModalPayOpen] = useState(false); // 控制 ModalPay 開啟狀態

  const handleOpenModalPay = () => {
    setIsModalPayOpen(true);  // 開啟 Modal
  };

  const handleCloseModalPay = () => {
    setIsModalPayOpen(false);  // 關閉 Modal
  };

  // Modal&ModalPay同時關閉
  const closeAllModals = () => {
    setIsModalOpen(false);
    setIsModalPayOpen(false);
  };


  //AOS淡入淡出套件
  useEffect(() => {
    AOS.init(); //初始化
  }, []
  );

  return (
    <>
      <header id="topbar">
        {/* <!-- logo區 --> */}
        <h1 className="logo"><a href="./index.html">
          <img src="./images/logo.svg" alt="Craftopia LOGO" />
        </a></h1>


        {/* <!-- 導覽列 --> */}
        <nav className="navigation">
          <ul className="search">
            <li><a href="#"><img src="./images/icons-search.svg" alt="搜尋課程" />搜尋課程</a></li>
          </ul>
          <ul className="menu">
            <li><img src="./images/icons-menu.svg" alt="menu選單" /></li>
          </ul>
        </nav>

      </header>

      {/*獨立區 */}
      <p className="breadCrumb">首頁＞課程列表＞overloading戒指...</p>
      <a id="buyNow" onClick={handleOpenModal}><img src="./images/btn-buyNow.svg" alt="" /></a>

      <main>
        <section id="intro">
          {/* 課程版頭intro區 */}
          <div className="coursePhoto">
            {selectedPhoto && (
              <figure className="photoL">
                <img src={selectedPhoto.url} alt={`selected ${selectedPhoto.id}`} />
              </figure>
            )}
            <div className='smallPhoto'>
              {Object.entries(photoOption).map(([key, { id, url }]) => (
                <figure
                  key={key}
                  className={`photoS ${selectedPhoto?.id === id ? 'photoSelected' : ''}`}
                  id={id}
                  onClick={() => handlePhotoSelect(id, url)} // 點擊圖片時更新選中的照片
                >
                  <img src={url} alt={`course ${id}`} />
                </figure>
              ))}
            </div>

          </div>
          <div className="courseIntro">
            <div className="courseIntroText">
              <h2 className='couresName'>Overloading 戒指 | 純銀 | 送禮自用送禮自用送禮自用送禮自用</h2>
              <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序、服務介紹及保養方式小講堂帶入課程介、服務介紹及保養方式小講堂帶入課程介。
              </p>
              <div className="ctg">
                <div id="ctg1">2hr</div>
                <div id="ctg2">入門</div>
                <div id="ctg3">大安區</div>
              </div>
              <img src="./images/HrLine_intro.svg" alt="" />
              <ul id="ulText">
                <li>提供 20 種以上純銀戒款與墜飾，可現場選擇喜歡的樣式。
                </li>
                <li>超過 50 款以上可愛鋼印創造個人風格。
                </li>
                <li>免費戒內/墜飾敲字，留下彼此專屬的印記。
                </li>
              </ul>
            </div>
            <div className="buy">
              <p>$1200起</p>
              <button onClick={handleOpenModal}>立即預約</button>
              <figure id="heart"><img src="./images/icon-heart.svg" alt="" /></figure>

            </div>
          </div>
          <figure id="bgCourse-w"><img src="./images/bg-courseIntro.svg" alt="" /></figure>
          <div className="bgblobs">
            <figure id="bgCourse-y"><img src="./images/bg-courseIntro-y.svg" alt="" /></figure>
          </div>
        </section>

        {/* <!-- 裝飾線 --> */}
        {/*<figure id="decoLineIntro"><img src="./images/decoline-intro.svg" alt=""></figure>*/}

        {/* 課程介紹content區 */}
        <section id="content">
          <figure><img src="./images/title_content.svg" alt="課程介紹" className="titlePic" id="titleContent" /></figure>
          <div className="courseContent">
            <div className='course-content-clip'>
              <div className='course-detail'>
                <img src="./images/coursePic-1.jpg" alt="" title="課程照片1" />
                <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序。</p>
                <img src="./images/coursePic-2.jpg" alt="" title="課程照片2" />
                <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序。可指定戒指亮面、霧面等效果。均附Wedding
                  Code保固卡、絨布袋及拭銀布，消費滿3000元加贈小圓木對戒盒。【 特殊加工服務 】特殊加工服務屬加價購部分，歡迎在課堂中與講師討論或諮詢。</p>
                <img src="./images/courseImg-2.JPG" alt="" title="課程照片3" />
                <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序。</p>
              </div>
            </div>
            <p className='course-readmore'>閱讀更多 <SlArrowDown /></p>
          </div>

        </section>

        {/* 課程QA區 */}
        <section id="QA">
          <figure><img src="./images/title_QA.svg" alt="課程Q&A" className="titlePic" id="titleQA" /></figure>
          <div className="courseQA">
            <ul className="list">
              <ShowQa />
            </ul>
          </div>
        </section>

        {/* 店家資訊studio區 */}
        <section id="studio">
          <div className="studioInfo">
            <figure><img src="./images/title_studio.svg" alt="店家資訊" id="titleStudio" /></figure>
            <a href="#" className='studio-photo-masked'>
              <h4>看店家簡介</h4>
              <figure><img src="./images/studio_pic1.jpg" alt="" /></figure>
            </a>
            <div className="studioInfo2">
              <h3 className="studioName">小自在工藝空間<sapn className="teacherName">課程講師：Elle</sapn>
              </h3>
              <p>●02-27754789</p>
              <p>●台北市大安區復興南路一段150號2樓</p>
              <p>●星期二至星期日 11:30-18:00</p>
            </div>
          </div>
        </section>

        {/* 心得Experience區 */}
        <section id="experience">
          <div className="expTop">
            <figure><img src="./images/title_Exp.svg" alt="最新心得足跡" className="titlePic" id="titleExp" /></figure>
            {/* <a id="seeAll">See All (485)＞</a> */}
            <a class="seemore-btn" href="#">
              <img class="ball" src="./images/Vector-circle-b.png" alt="" />
              <span class="font">see all(485)</span>
              <img class="arr" src="./images/Vector-arr.png" alt="" />
            </a>

          </div>
          <div className="newestExp">
            <div className="Exp">
              <img src="./images/exp-1.jpg" alt="" className="expPic" />
              <div className="expContent">
                <div className="expInfo">
                  <img src="./images/exp-id-pic-1.png" alt="" />
                  <p>Amber</p>
                  <img src="./images/tag-stoneLV.svg" alt="" />
                </div>
                <div className="expDate">
                  <p>2024 年 10 月 13 日</p>
                  <span>‧</span>
                  <p>Overloading 戒指 | 純銀 | 送禮自用</p>
                </div>
                <p className="expText">市面上的評論幾乎都在3行內結束，可能也跟使用者的習慣有關，長篇一點的可以用...藏起來像下面那樣?。老師很讚，推推</p>
              </div>
            </div>
            <img src="./images/HrLine_rec.svg" alt="" className="hrline" />
            <div className="Exp">
              <img src="./images/exp-2.jpg" alt="" className="expPic" />
              <div className="expContent">
                <div className="expInfo">
                  <img src="./images/exp-id-pic-1.png" alt="" />
                  <p>文仔</p>
                  <img src="./images/tag-stoneLV.svg" alt="" />
                </div>
                <div className="expDate">
                  <p>2024 年 10 月 11 日</p>
                  <span>‧</span>
                  <p>Overloading 戒指 | 純銀 | 送禮自用</p>
                </div>
                <p className="expText">
                  一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！
                </p>
              </div>
            </div>
          </div>
          {/* <figure id="bgExperience"><img src="./images/bg-experience.svg" alt=""></figure> */}
        </section>

        {/* 相關課程推薦recommend區 */}
        <section id='recommend'>
          <figure><img src="./images/title_recommend.svg" alt="相關課程推薦" className="titlePic" id="titleRec" /></figure>
          <div className="boxList">
            <div className="box">課程卡片1</div>
            <div className="box">課程卡片2</div>
            <div className="box">課程卡片3</div>
            <div className="box">課程卡片4</div>
          </div>
        </section>

        <section className="blobstools" >
          {/* 泡泡區 */}
          <figure className="blobs" id="blobs-1" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobs" id="blobs-2" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobs" id="blobs-3" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobsw" id="blobs-4" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobs" id="blobs-5" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobsw" id="blobs-6" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobs" id="blobs-7" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobs" id="blobs-8" data-aos="fade-up" data-aos-duration="1800"></figure>
          <figure className="blobs" id="blobs-9" data-aos="fade-up" data-aos-duration="800"></figure>
          <figure className="blobs" id="blobs-5-2" data-aos="fade-up" data-aos-duration="800"></figure>
          <figure className="blobsw" id="blobs-6-2" data-aos="fade-up" data-aos-duration="800"></figure>
          <figure className="blobs" id="blobs-7-2" data-aos="fade-up" data-aos-duration="800"></figure>
          <figure className="tools" id="tools-awl" data-aos="fade-up" data-aos-duration="800"></figure>

        </section>

      </main>

      {/* Modal_預約彈窗 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="lightBoxWrap">
          <div className="header">
            <h3 className="topTitle">選擇預約內容</h3>
            <button id="iconX" onClick={handleCloseModal}></button>
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

        {/* 付款彈窗 */}
        <ModalPay isOpen={isModalPayOpen} onClose={handleCloseModalPay}>
          <div className="lightBoxWrap">
            <div className="header">
              <h3 className="topTitle">確認預約內容</h3>
              {/* <img src="./images/icons-X.svg" alt="" id="iconX"/> */}
              <button id="iconXPay" onClick={closeAllModals}></button>
            </div>
            <div className="content">
              <section className="rsvPayContent">
                <h3>預約內容</h3>
                <div className="rsvPayContentWrap">
                  <figure id="payPic"><img src="./images/courseImg-1.JPG" alt="" /></figure>
                  <div id="payCourse">
                    <h4>Overloading 戒指 | 純銀 | 送禮自用送禮自用送禮自用送禮自用</h4>
                    <p id="studioName">小自在工藝空間</p>
                    <hr />
                    <div className="rsvPlan1">
                      <div className="rsvPlan2">
                        <div className="rsvPlan">
                          <p className="planCtg">課程方案</p>
                          <p>{selectedCourse ? (
                            <p>{courseOption[selectedCourse].option}</p>
                          ) : (
                            ''
                          )}</p>
                        </div>
                        <div className="rsvPlan">
                          <p className="planCtg">日期</p>
                          <div className='selectedTime'>
                            {selectedDate ? (
                              <p>{selectedDate.toLocaleDateString("zh-TW", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}</p>
                            ) : (
                              <p>尚未選擇日期</p>
                            )}
                            <p>&nbsp;‧&nbsp;{TimeOption[selectedTime]}</p>
                          </div>
                        </div>
                        <div className="rsvPlan">
                          <p className="planCtg">人數</p>
                          <div>
                            {adultCount > 0 && (
                              <p>
                                成人 <span>{adultCount}</span> 位
                              </p>
                            )}
                            {childCount > 0 && (
                              <p>
                                孩童 <span>{childCount}</span> 位
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="rsvPlan" id="payFee">
                        <p>金額小計</p>
                        <p id="fee">${totalFee}</p>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
              <section className="rsvPayment">
                <h3>選擇付款方式</h3>
                <div className="payRadio">
                  <fieldset>
                    <li>
                      <input type="radio" name="payment" id="payment1" title="信用卡" value="信用卡" />
                      <label htmlFor="payment1">信用卡
                        <div>
                          <img src="./images/payment-Visa.svg" alt="" />
                          <img src="./images/payment-JCB.svg" alt="" />
                          <img src="./images/payment-Mastercard.svg" alt="" />
                        </div>
                      </label>
                      <div>
                      </div>
                    </li>
                    <li>
                      <input type="radio" name="payment" id="payment2" title="PayPal" value="PayPal" />
                      <label htmlFor="payment2">PayPal
                        <img src="./images/payment-PayPal.svg" alt="" />
                      </label>
                    </li>
                    <li>
                      <input type="radio" name="payment" id="payment3" title="Apple Pay" value="Apple Pay" />
                      <label htmlFor="payment3">Apple Pay
                        <img src="./images/payment-ApplePay.svg" alt="" />
                      </label>
                    </li>
                    <li>
                      <input type="radio" name="payment" id="payment4" title="LINE Pay" value="LINE Pay" />
                      <label htmlFor="payment4">LINE Pay
                        <img src="./images/payment-Line pay.svg" alt="" />
                      </label>
                    </li>
                  </fieldset>
                </div>
                <div className="payBtn">
                  <button id="paymentBack" onClick={handleCloseModalPay}>返回</button>
                  <button id="paymentPay" >付款去 →</button>
                </div>
              </section>
            </div>
          </div>
        </ModalPay>
      </Modal>


      {/* 頁尾區 */}
      <footer>
        <div className="footer-bgDeco">
          <img src="./images/footer-deco.png" alt="" />
        </div>
        <div className="foot-content">
          <img src="./images/footer-logo.svg" alt="" />
          {/* 選單 */}
          <ul className="menu">
            <li><a href="">首頁</a></li>
            <li>
              <a href="">發掘店家</a>
              <ul>
                <li><a href="">金工</a></li>
                <li><a href="">陶藝</a></li>
                <li><a href="">皮革</a></li>
              </ul>
            </li>
            <li>
              <a href="">預約課程</a>
              <ul>
                <li><a href="">熱門課程</a></li>
                <li><a href="">最新課程</a></li>
              </ul>
            </li>
            <li>
              <a href="">商城</a>
              <ul>
                <li><a href="">商城</a></li>
              </ul>
            </li>
            <li>
              <a href="">會員中心</a>
              <ul>
                <li><a href="">會員資料</a></li>
                <li><a href="">預約紀錄</a></li>
                <li><a href="">收藏紀錄</a></li>
                <li><a href="">我的分享</a></li>
              </ul>
            </li>


            <li>
              <a href="">常見問題</a>
              <ul>
                <li><a href="">會員相關</a></li>
                <li><a href="">預約相關</a></li>
                <li><a href="">課程相關</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <small> Copyright© 2024 CRAFTOPIA All rights reserved. </small>
      </footer>

      <script src="./js/jquery-3.7.1.min.js"></script>
      <script src="./js/script.js"></script>

    </>
  )
}


export default App
