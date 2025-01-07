function initEndor() {
    "use strict";

    if ($('.tp-banner').length > 0) {
        $('.tp-banner').show().revolution({
            delay: 6000,
            startheight: 700,
            startwidth: 1170,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullWidth: 'on'
        });
    }
    if ($('.tp-banner-full').length > 0) {
        $('.tp-banner-full').show().revolution({
            delay: 6000,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullScreen: 'on'
        });
    }




    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('#headerwrap').addClass('fixed-header');
            $('.headerwrap div').addClass('visible-title');
        } else {
            $('#headerwrap').removeClass('fixed-header');
            $('#headerwrap div').removeClass('visible-title');
        }
    });

    /* ======= Scroll to Top ======= */
    var scrollTop = $("#scroll-top");
    $(window).on('scroll', function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $('#scroll__up').removeClass('hide');
            $('#scroll__up').addClass('show');
        } else {
            $('#scroll__up').removeClass('show');
            $('#scroll__up').addClass('hide');
        }
    });

    /* Click event to scroll to top */
    $(scrollTop).on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 80);
        return false;
    });


    //   sliders ------------------
    function setUpCarouselSlider() {
        $('.fw-carousel .swiper-wrapper').addClass('no-horizontal-slider');
        if ($(".fw-carousel").length > 0) {
            if ($(window).width() >= 1064 && j2 == undefined) {
                var j2 = new Swiper(".fw-carousel .swiper-container", {
                    preloadImages: false,
                    loop: false,
                    freeMode: false,
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    grabCursor: true,
                    mousewheel: true,
                    speed: 1400,
                    direction: "horizontal",
                    scrollbar: {
                        el: '.hs_init',
                        draggable: true,
                    },
                    effect: "slide",
                    navigation: {
                        nextEl: '.fw-carousel-button-next',
                        prevEl: '.fw-carousel-button-prev',
                    },
                    on: {
                        resize: function() {
                            if ($(window).width() < 1064) {
                                j2.update();
                            }
                        },
                    }
                });
            }
            if ($(window).width() < 1064 && j2 !== undefined) {
                j2.destroy();
                j2 = undefined;
                $('.fw-carousel .swiper-wrapper').removeAttr('style').addClass('no-horizontal-slider');
                $('.swiper-slide').removeAttr('style');
            }
        }
    }
    setUpCarouselSlider();
    if ($(".testilider").length > 0) {
        var j2 = new Swiper(".testilider .swiper-container", {
            preloadImages: false,
            slidesPerView: 6,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: false,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                990: {
                    slidesPerView: 3,
                },
            }
        });
    }
    if ($(".single-slider").length > 0) {
        var j2 = new Swiper(".single-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoHeight: true,
            grabCursor: false,
            mousewheel: false,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ss-slider-cont-next',
                prevEl: '.ss-slider-cont-prev',
            },
        });
    }




    $("a , .btn ,   img,   input  , .share-btn   , .closedet_style  , .nav-button , .swiper-pagination-bullet , .to-top-btn  , .gc-slider-cont , .fwcb , .pr-det_btn , .cl-det-btn , .share-icon").on({
        mouseenter: function() {
            $(".element-item").addClass("elem_hover");
        },
        mouseleave: function() {
            $(".element-item").removeClass("elem_hover");
        }
    });
    $(" .swiper-slide").on({
        mouseenter: function() {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function() {
            $(".element-item").removeClass("slider_hover");
        }
    });
    $(".brand-section .swiper-slide a , .next-project-swiper-link").on({
        mouseenter: function() {
            $(".element-item").removeClass("slider_hover");
        },
        mouseleave: function() {
            $(".element-item").addClass("slider_hover");
        }
    });
    $(".gallery-filters-overlay , .pr-det_overlay , .sb-det_overlay , .pr-det_title ").on({
        mouseenter: function() {
            $(".element-item").addClass("close-icon");
        },
        mouseleave: function() {
            $(".element-item").removeClass("close-icon");
        }
    });

}

function contentAnimHide() {

    setTimeout(function() {
        $(".element-item").removeClass("loader_element");
    }, 300);
}
if ($(".element-item").length > 0) {
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.15;
    var active = false;
    var ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);

    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
}



/* -----------------------------------------------
                    LightBox / Fancybox
     ----------------------------------------------- */

/*MAGNIFIC POPUP JS*/

$('.video-play').magnificPopup({
    type: 'iframe'
});
var magnifPopup = function() {
    $('.work-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) { // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
};

// 3 LightBox / Fancybox
if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            media: {}
        }
    });
}



$('[data-toggle="offcanvas"]').on('click', function() {
    $('.navbar-collapse').toggleClass('show');
});

/*==== Nav ====*/
$('.navbar-collapse a').on('click', function() {
    $(".navbar-collapse").collapse('hide');
});


    /* ================ Nav ================ */
    $('.fa-caret-down').on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle('');
    });

$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({
        count: settings.start
    }).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({
    end: 12,
    duration: 3000
});
$('#number2').jQuerySimpleCounter({
    end: 355,
    duration: 3000
});
$('#number3').jQuerySimpleCounter({
    end: 359,
    duration: 2000
});
$('#number4').jQuerySimpleCounter({
    end: 246,
    duration: 2500
});


$('#buttonid').on('click', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var mesg = $('#messagevalue').val();

    $.ajax({
        url: 'https://jogari.com/asif/monads_preview/html/sendemail.php',
        type: 'POST',
        data: 'nam=' + name + '&email=' + email + '&phone=' + phone + '&messagevalue=' + mesg + '&template=Vistic',
        error: function() {
            // console.log('');
            $('#buttonid').after('<div class="alert alert-danger" role="alert"><strong>Error!</strong> email did not sent, something went wrong.</div>')

            return false;
        },
        success: function() {
            $('#ajaxForm').trigger("reset");
            $('#buttonid').after('<div class="alert alert-success"  role="alert"><strong>Success!</strong> Indicates a successful or positive action.</div>')

        }
    });
});
 


$(function() {
    readyFunctions();
});

function readyFunctions() {
    initEndor();
}