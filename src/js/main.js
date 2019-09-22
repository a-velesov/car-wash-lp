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

    function initIndexMap(center, zoom) {
        if (null == window.bYandexMapScriptsLoaded) {
            function _wait_for_map() {
                if (window.ymaps && window.ymaps.Map)
                    init_(center, zoom);
                else
                    setTimeout(_wait_for_map, 50);
            }
      
            $('head').append('<script type="text/javascript" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"><script>');
            _wait_for_map();
        } else {
            init_(center, zoom);
        }
    }

    function init_(center, zoom) {
        let indexMapObj = new ymaps.Map('bottom-map', {
            center: center,
            zoom: zoom,
            controls: ["zoomControl", "typeSelector"],
            behaviors: ["dblClickZoom", "drag"],
        }, {
            searchControlProvider: 'yandex#search'
        });

        let placemark = new ymaps.Placemark(center, {}, {
            preset: 'islands#blueDotIcon',
            iconColor: '#1768bc'
        });

        indexMapObj.geoObjects.add(placemark);
    }

    //map init
    initIndexMap([53.2027893,50.1525923], 17);

    function doCalc(){
        let inputs = $('.calc form').find('input[type=hidden]'),
            total = 0;
        if($(inputs).length){
            $(inputs).each(function(key, el){
                if($(el).attr('value') > 0){
                    total += $(el).attr('value')*$(el).attr('data-price');
                }
                if($(el).parents('.form-row.line').length){
                    let description = $(el).parents('.form-row.line').find('.descr');
                    if($(el).attr('value') > 0 && $(el).attr('data-price') > 0){
                        description.text(description.attr('data-yes') + $(el).attr('value') + ' мин.');
                    }else{
                        description.text(description.attr('data-no'));
                    }
                }
            });
        }
        $('.calc-total span').text(total+' рублей');
        // console.log('calc!');
    }

    function showCounter(el, hcounter){
        if(!$(el).find('.calc-popup').length){
            $('.calc form').find('.calc-popup').remove();
            $(el).append('<div class="calc-popup"><div class="counter"><button value="-1"></button><div><span data-input="'+$(hcounter).attr("name")+'">'+$(hcounter).attr("value")+'</span> мин.</div><button value="+1"></button></div></div>');
        }else{
            $('.calc form').find('.calc-popup').remove();
        }
    }

    $('.calc form label').hover(
        (e) => {
            const input = e.currentTarget.control;
            let valueInput = $(input).parents('.form-row').find('input[type=hidden]');
            
            if(input.checked && input.dataset.price > 0){
                showCounter(e.currentTarget, valueInput);
            }
        },  
        (e) => {
            // console.log(e);
        }
    );

    $(document).on('click', '.calc form label', (e) => {
        const input = e.currentTarget.control;
        let valueInput = $(input).parents('.form-row').find('input[type=hidden]');
        setTimeout(() => {
            if(input.checked && input.dataset.price > 0 && !$(e.currentTarget).find('.calc-popup').length){
                showCounter(e.currentTarget, valueInput);
            }
        }, 300);
    });

    $(document).on('click', '.calc-popup button', (e) => {
        e.preventDefault();

        const el = $(e.currentTarget);
        let value = $(el).siblings('div').find('span');
        let result = parseInt($(value).text()) + parseInt(e.currentTarget.value);

        if(result > 0){
            $(value).text(result);
        }

        $('input[name="'+$(value).attr("data-input")+'"]').val(result);
        doCalc();
    });

    $(document).on('change', '.calc form input', (e) => {
        const el = $(e.currentTarget);
        let valueInput = el.parents('.form-row').find('input[type=hidden]');
        $(valueInput).attr('data-price', el.attr('data-price'));
        
        doCalc();
    });

    $(document).mouseup((e) => {
		var div = $(".calc-popup");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.remove(); // скрываем его
		}
	});

    doCalc();
});