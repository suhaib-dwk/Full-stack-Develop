$(document).ready(function () {
    var $fadeOut = $('.fadeOut');
    var $fadeToggle = $('.fadeToggle');

    $fadeOut.fadeIn(1000);
    $fadeToggle.fadeIn(1000);
    function handleScroll() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            $fadeOut.fadeOut(3000);
            $fadeToggle.fadeToggle(3000);


        } else {
            $fadeOut.fadeIn(1000);
            $fadeToggle.fadeIn(1000);
        }
    }

    $(window).scroll(handleScroll);
});




$(document).ready(function () {
    $(".buttonArrow").click(function () {
        ($(window).scrollTop() + $(window).height() < $(document).height())
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        $(".buttonArrow span").text("arrow_downward");

    });
});

$(document).ready(function () {
    $("#menu-btn").click(function () {
        $(".navbar").toggleClass("show");
    });
});