$(document).ready(function () {


    // For sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            //display sticky nav
            $('nav').addClass('sticky');
        } else {
            //undo
            $('nav').removeClass('sticky');
        }
    }, { offset: '60px' });


    // For scrolling sections
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 0);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 0);
    })

});