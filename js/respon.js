$(document).ready(function () {
    $('.toggle-menu').click(function (e) { 
        e.preventDefault();
        // $('.navbar ul').fadeIn();
        // $('.navbar ul').toggle();
        // $('.menu').slideToggle();
        $('.menu').toggleClass('fadeIn');
    });
});