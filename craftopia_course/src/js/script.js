$(function () {
    $('.seemore-btn').on('click',function (e) {
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