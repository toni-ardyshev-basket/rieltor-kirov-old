$(window).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();

    //изменеие data-aos для Safari
    if(navigator.userAgent.search('Safari') != -1){
        $('.left-columns').attr({ "data-aos": "fade-right", "data-aos-offset": "3vw"})
    }
});


//Функция отображения PopUp
function PopUpShow(){
    $('.header-container,  main, footer').addClass('blur');
    $('.b-popup').css({'display':'flex'});
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $('.header-container,  main, footer').removeClass('blur');
    $("#popup1").hide();
}

//слайдер
$(function() {
    var owl = $('.slider-quality'),
        owlOptions = {
            loop: true, //Зацикливаем слайдер
            margin: 50, //Отступ от элемента справа в 50px
            navigation: true, //Отключение навигации
            dots:true,
            autoplay: true, //Автозапуск слайдера
            smartSpeed: 1000, //Время движения слайда
            autoplayTimeout: 2000, //Время смены слайда
            responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                480: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
    };
    if ( $(window).width() > 480 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() > 480 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});


$('.slider-reviews').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 50, //Отступ от элемента справа в 50px
    nav: false, //Отключение навигации
    autoplay: true, //Автозапуск слайдера
    smartSpeed: 2000, //Время движения слайда
    autoplayTimeout: 10000, //Время смены слайда
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0: {
            items: 1
        },
        375: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


//Функция отображения .service-grid
$('.services-grid').ready(function (){
    AOS.init({
        easing: 'ease-in-out-sine'
    });
});


//Изменение цвета header-top
$(window).scroll(function scrollHeaderTop() {
    if ($(document).scrollTop() < $(document).height() * 0.22 || $(document).scrollTop() > $(document).height() * 0.64){
        $('.header-top').css('position', 'absolute');
        $('.header-top').removeClass('top-scroll');

    } else {
        $('.header-top').addClass('top-scroll');
        $('.header-top').css('position', 'fixed');
        $('.header-top').css('transition', '.4s');
        $('.header-btn .phone').css('color', '#F4F4F4');
    }
});



