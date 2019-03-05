//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend lazy.min.js

$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    $(function () {
        $('.lazy').lazy();
    });
    /* Видео */
    $(function () {
        $(".video_wrapper img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?rel=0&autoplay=true" allowfullscreen></iframe>')
        });
    });
    /*Конец документа*/
});