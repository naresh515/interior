$(document).ready(function () {
    var isScrolled = false;
    const sticky = $('.nav');


    $(".toggle").click(function () {
        $(".toggle").toggleClass("is-active")
        $(".nav-links").toggleClass("is-open")
        $("body").toggleClass("remove-scroll")
    });

    $(".accoridon-button").click(function () {
        if ($(this).parent('.accordion-item').hasClass('active-menu')) {
            $(".accordion-item").removeClass("active-menu");
        } else {
            $(".accordion-item").removeClass("active-menu");
            $(this).parent(".accordion-item").addClass("active-menu");
        }
        if ($(this).parent('.accordion-item2').hasClass('active-menu')) {
            $(".accordion-item2").removeClass("active-menu");
        } else {
            $(".accordion-item2").removeClass("active-menu");
            $(this).parent(".accordion-item2").addClass("active-menu");
        }
    });

    $(".search").click(function () {
        $(".search").toggleClass("search-inside");
        $(".search-input").toggleClass("search-box2");
        $(".nav-links").toggleClass("nav-links-close");
        $(".toggle").toggleClass("toggle-remover")
    })

    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');
        }
        if (scroll >= 4000 && isScrolled == false) {
            isScrolled = true
            $('.count').each(function () {
                var countValue = parseInt($(this).text());
                $(this).prop('Counter', 0).animate({
                    Counter: countValue
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });

    $('.btn-group').click(function () {
        $('.btn-group').removeClass("tags-btn");
        $(this).addClass("tags-btn")
    })
    $('.tag-btn-bottom').click(function () {
        $('.tag-btn-bottom').removeClass("tags-btn");
        $(this).addClass("tags-btn")
    })

    $('.popup').click(function () {
        $(".img-overlay").addClass("img-overlay-open");
        $(this).clone().appendTo(".zoom-img-overlay");
        $("body").addClass("remove-scroll");
    });

    $(".close-btn").click(function () {
        $(".img-overlay").removeClass("img-overlay-open");
        $(".zoom-img-overlay").empty();
        $("body").removeClass("remove-scroll");
    });

    $('.client-logo-img').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        variableWidth: true,
        pauseOnHover: false,
        infinite: true,
        cssEase: 'linear'
    })

    $(".play-btn").click(function () {
        $(".play-btn").toggleClass("pause-btn")
    })
})

function videoPlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}