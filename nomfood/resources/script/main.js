$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            //display sticky nav
            $('nav').addClass('sticky');
        } else {
            //undo
            $('nav').removeClass('sticky');
        }
    }, { offset: '60px' });

});