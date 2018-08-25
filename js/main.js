'use strict';

(function($) {
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slide: "img",
        prevArrow: ".gallery__button--left",
        nextArrow: ".gallery__button--right"
    });
})(jQuery);