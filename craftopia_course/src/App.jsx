import '../css/style.css'

function App() {

  return (
    <>
      <header>
        {/* 導覽列 */}
        <div className="navbar"></div>
        <p className="breadCrumb"></p>
      </header>

      <main>
        <section id="intro">
          {/* 課程版頭intro區 */}
          <div className="photo">
            <feature className='photoL'></feature>
            <div className='smallPhoto'>
              <feature className='photoS'></feature>
              <feature className='photoS'></feature>
              <feature className='photoS'></feature>
            </div>
          </div>
          <div className="courseIntro">
            <h2 className='couresName'>Overloading 戒指 | 純銀 | 送禮自用送禮自用送禮自用送禮自用</h2>
            <p>由材質、服務介紹及保養方式小講堂帶入課程介紹，每個步驟都會有專業講師解說及現場示範，帶您體驗刻印敲紋、彎折、鋸切、焊接，拋光等金工職人專業工序、服務介紹及保養方式小講堂帶入課程介、服務介紹及保養方式小講堂帶入課程介。</p>
            <ul>
              <li>提供 20 種以上純銀戒款與墜飾，可現場選擇喜歡的樣式。
              </li>
              <li>超過 50 款以上可愛鋼印創造個人風格。
              </li>
              <li>免費戒內/墜飾敲字，留下彼此專屬的印記。
              </li>
            </ul>
            <img src="" alt="" />
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p>$1000起</p>
            <button>立即預約</button>
            <p>♥icon</p>
          </div>
          <button>浮動立即預約</button>
        </section>

        {/* 課程介紹content區 */}
        <section id="content">
          <h2>#課程介紹</h2>
          <div className="courseContent">
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facilis incidunt dignissimos temporibus assumenda eos corporis quibusdam quae, veritatis aspernatur totam maxime veniam, in laboriosam. Reiciendis sit deserunt officia, numquam fugit modi exercitationem at non suscipit sapiente eius commodi quos perferendis ipsa doloribus a sed, enim natus adipisci consequatur aliquam.</p>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facilis incidunt dignissimos temporibus assumenda eos corporis quibusdam quae, veritatis aspernatur totam maxime veniam, in laboriosam. Reiciendis sit deserunt officia, numquam fugit modi exercitationem at non suscipit sapiente eius commodi quos perferendis ipsa doloribus a sed, enim natus adipisci consequatur aliquam.</p>
          </div>

        </section>

        {/* 課程QA區 */}
        <section id="QA">
          <h2>#課程Q&A</h2>

        </section>

        {/* 店家資訊studio區 */}
        <section id="studio">
          <h2>#店家資訊</h2>
          <div>
            <feature></feature>
            <div>
              <div>
                <h3 className="studioName">小自在工藝空間</h3>
                <h3 className="teacherName">課程講師：Elle</h3>
              </div>
              <p>電話</p>
              <p>地址</p>
              <p>營業時間</p>
            </div>
          </div>
        </section>

        {/* 心得Experience區 */}
        <section id="experience">
          <h2>#最新心得足跡</h2>
          <div className="newestExp">
            <div className="1stExp">
              <img src="" alt="" />
              <div>
                <div>
                  <img src="" alt="" />
                  <p>體驗者暱稱</p>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>發布日期</p>
                  <p>參加的課程</p>
                </div>
                <p>心得區Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, sit ipsum praesentium laudantium aliquam ipsa repellat voluptatum quo dignissimos a?</p>
              </div>
            </div>
            <div className="2ndExp">
              <img src="" alt="" />
              <div>
                <div>
                  <img src="" alt="" />
                  <p>體驗者暱稱</p>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>發布日期</p>
                  <p>參加的課程</p>
                </div>
                <p>心得區Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, sit ipsum praesentium laudantium aliquam ipsa repellat voluptatum quo dignissimos a?</p>
              </div>
            </div>
          </div>
        </section>
        {/* 相關課程推薦recommend區 */}
        <section id='recommend'>
          <div className="box">課程卡片1</div>
          <div className="box">課程卡片2</div>
          <div className="box">課程卡片3</div>
          <div className="box">課程卡片4</div>
        </section>
      </main>




      {/* 頁尾區 */}
      <footer>


      </footer>



    </>
  )
}

export default App
