//=../../node_modules/jquery/dist/jquery.min.js
//=../js/vendor/swiper.min.js

$(document).ready(() => {

    //top carousel init
    let topCarousel = new Swiper ('.top-carousel .swiper-container', {
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: '.top-carousel .swiper-button-prev',
            nextEl: '.top-carousel .swiper-button-next',
        }
    });

    //programs carousel init
    let programsCarousel = new Swiper ('.programs .swiper-container', {
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: '.programs .swiper-button-prev',
            nextEl: '.programs .swiper-button-next',
        }
    });
});