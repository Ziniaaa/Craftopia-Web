import '../css/style.css'

function App() {

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
      <a id="buyNow"><img src="./images/btn-buyNow.svg" alt="" /></a>

      <main>
        <section id="intro">
          {/* 課程版頭intro區 */}
          <div className="coursePhoto">
            <figure className="photoL"><img src="./images/courseImg-1.JPG" alt="" /></figure>
            <div className='smallPhoto'>
              <figure className="photoS"><img src="./images/courseImg-1.JPG" alt="" /></figure>
              <figure className="photoS"><img src="./images/courseImg-2.jpg" alt="" /></figure>
              <figure className="photoS"><img src="./images/courseImg-3.jpg" alt="" /></figure>
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
              <p>$1000起</p>
              <button>立即預約</button>
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
            <img src="./images/coursePic-1.jpg" alt="" title="課程照片1" />
            <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序。</p>
            <img src="./images/coursePic-2.jpg" alt="" title="課程照片2" />
            <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序。可指定戒指亮面、霧面等效果。均附Wedding
              Code保固卡、絨布袋及拭銀布，消費滿3000元加贈小圓木對戒盒。【 特殊加工服務 】特殊加工服務屬加價購部分，歡迎在課堂中與講師討論或諮詢。</p>
            <img src="./images/courseImg-2.jpg" alt="" title="課程照片3" />
            <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序。</p>

          </div>

        </section>

        {/* 課程QA區 */}
        <section id="QA">
          <figure><img src="./images/title_QA.svg" alt="課程Q&A" className="titlePic" id="titleQA" /></figure>
          <div className="courseQA">
            <ul className="list">
              <li className="list-row">
                <div>
                  <p className="quest-mark">?</p>
                </div>
                <div className="QAset">
                  <div className="question">
                    <p>如何註冊會員</p>
                    <div className="icon-arrow">
                      <img className="QA-arrowDown" src="./images/type=arrowDown_bold.svg" alt="" />
                      <img className="QA-arrowUp" src="./images/type=arrowUp_bold.svg" alt="" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aperiam id dicta molestias fugiat voluptas laudantium est similique debitis excepturi. Perferendis repudiandae, corrupti voluptatem cupiditate illo ab in animi amet excepturi laborum eveniet, ipsam hic, consequuntur molestiae earum eos quisquam dolore tempora! Distinctio veritatis ex pariatur delectus eum ab exercitationem ullam libero iusto sit? Quae nemo quo voluptatum ea enim.
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-row-light">
                <div>
                  <p className="quest-mark">?</p>
                </div>
                <div className="QAset">
                  <div className="question">
                    <p>如何註冊會員</p>
                    <div className="icon-arrow">
                      <img className="QA-arrowDown" src="./images/type=arrowDown_bold.svg" alt="" />
                      <img className="QA-arrowUp" src="./images/type=arrowUp_bold.svg" alt="" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ullam, impedit molestiae neque veniam provident? Beatae, dignissimos? Voluptas, vero expedita.
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <p className="quest-mark">?</p>
                </div>
                <div className="QAset">
                  <div className="question">
                    <p>完成後的成品多久可以拿</p>
                    <div className="icon-arrow">
                      <img className="QA-arrowDown" src="./images/type=arrowDown_bold.svg" alt="" />
                      <img className="QA-arrowUp" src="./images/type=arrowUp_bold.svg" alt="" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-row-light">
                <div>
                  <p className="quest-mark">?</p>
                </div>
                <div className="QAset">
                  <div className="question">
                    <p>報名費有包含材料費嗎</p>
                    <div className="icon-arrow">
                      <img className="QA-arrowDown" src="./images/type=arrowDown_bold.svg" alt="" />
                      <img className="QA-arrowUp" src="./images/type=arrowUp_bold.svg" alt="" />
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。
                      <br/>
                        · 開啟「飛航模式」後等待3 分鐘再關閉，並再次嘗試操作。
                        <br/>
                          · 開啟「飛航模式」後等待3 分鐘再關閉，並再次嘗試操作。
                        </p>
                      </div>
                  </div>
              </li>


            </ul>
          </div>
        </section>

        {/* 店家資訊studio區 */}
        <section id="studio">
          <div className="studioInfo">
            <figure><img src="./images/title_studio.svg" alt="店家資訊" id="titleStudio" /></figure>
            <figure><img src="./images/studio_pic1.png" alt="" /></figure>
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
            <a id="seeAll">See All (485)＞</a>
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

        <section className="blobstools">
          {/* 泡泡區 */}
          <figure className="blobs" id="blobs-1"></figure>
          <figure className="blobs" id="blobs-2"></figure>
          <figure className="blobs" id="blobs-3"></figure>
          <figure className="blobsw" id="blobs-4"></figure>
          <figure className="blobs" id="blobs-5"></figure>
          <figure className="blobsw" id="blobs-6"></figure>
          <figure className="blobs" id="blobs-7"></figure>
          <figure className="blobs" id="blobs-8"></figure>
          <figure className="blobs" id="blobs-9"></figure>
          <figure className="blobs" id="blobs-5-2"></figure>
          <figure className="blobsw" id="blobs-6-2"></figure>
          <figure className="blobs" id="blobs-7-2"></figure>
          <figure className="tools" id="tools-awl"></figure>

        </section>

      </main>




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
    </>
  )
}

export default App
