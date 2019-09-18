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

    //reviews carousel init
    let reviewsCarousel = new Swiper ('.reviews .swiper-container', {
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: '.reviews .swiper-button-prev',
            nextEl: '.reviews .swiper-button-next',
        }
    });

    //gallery carousel init
    let galleryCarousel = new Swiper ('.gallery .swiper-container', {
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: '.gallery .swiper-button-prev',
            nextEl: '.gallery .swiper-button-next',
        }
    });
});