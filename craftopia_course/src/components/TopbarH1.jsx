import $ from 'jquery'
import "../scss/_style_TopbarH1.scss";


export default function TopbarH1() {
    // h1
    // $(function () {
    //     // 計算 .banner 的底部位置
    //     let area = $('#topbar').offset().top + $('#topbar').height();


    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() > area) {
    //             $('.logo-w').hide();
    //             $('.logo-b').show();
    //         } else {
    //             $('.logo-w').show();
    //             $('.logo-b').hide();
    //         }
    //     });
    // });


    return (
        <>

            <div id="topbar">
                {/* h1 */}
                <h1 className="logo">
                    <a href="#">
                        <img className="logo-w" src="./images/logow.png" alt="" />
                        <img className="logo-b" src="./images/logo.svg" alt="" />
                    </a>
                </h1>


                {/* 漢堡 */}
                <nav className="navigation">
                    <ul>
                        <li className="secondary3"><a href=""><img src="./images/findshop-btn.png" alt="發掘店家" /></a></li>
                        <li className="secondary2"><a href=""><img src="./images/member-btn.png" alt="會員中心" /></a></li>
                        <li className="secondary1"><a href=""><img src="./images/faq-btn.png" alt="常見問題" /></a></li>
                        <li className="first"><a href=""><img src="./images/search-btn.png" alt="搜尋課程" /></a></li>
                    </ul>

                    {/* 漢堡按鈕  */}
                    <button className="hamburger" onClick={() => {
                        let hamburgerStyle = document.querySelector('.hamburger');
                        hamburgerStyle.classList.toggle('click');
                        for (let i = 1; i <= 3; i++) {
                            let blockMove = document.querySelector(`.secondary${i}`);
                            blockMove.classList.toggle(`show${i}`)
                        }
                    }}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                </nav>
            </div>

        </>
    )
}
