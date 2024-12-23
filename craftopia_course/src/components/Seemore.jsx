import $ from 'jquery'


export default function Seemore({ text, imgBall, href }) {


    $(function () {
        $('.seemore-btn').click(function (e) {
            e.preventDefault();
            const href = $(this).attr('href');

            setTimeout(function () {
                window.location.href = href;
            }, 1000);
            $(this).addClass('shot');

            setTimeout(function () {
                $('.font').addClass('transform-delay');
                $('.arr').addClass('transform-delay');
            }, 300);

            setTimeout(function () {
                $('.font').addClass('transform-delay2');
                $('.arr').addClass('transform-delay2');
                $('.ball').addClass('transform-delay2');
            }, 700);

        })
    })


    return (
        <>
            <a className="seemore-btn" href={href}>
                <img className="ball" src={imgBall} alt="" />
                <span className="font">{text}</span>
                <img className="arr" src="./images/Vector-arr.png" alt="" />
            </a>
        </>
    )
}
