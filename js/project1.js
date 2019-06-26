$(document).ready(function () {
    $('.click2').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#about').offset().top
        },1000)
    });
    $('.click3').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#statistics').offset().top
        },1000)
    });
    $('.click5').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#whatwedo').offset().top
        },1000)
    });
    $('.click6').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#discount').offset().top
        },1000)
    });
    $('.click8').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#gallery').offset().top
        },1000)
    });
    $('.click4').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#pricing').offset().top
        },1000)
    });
    // $('.img1').click(function (e) { 
    //     e.preventDefault();
    //     $('.f-modal').css('display','block');
    // });
    // $('.img').click(function (e) { 
    //     e.preventDefault();
    //     $('.modal').fadeOut();
    // });
    // $('.row').click(function (e) { 
    //     e.preventDefault();
    //     e.stopPropagation();
    // });
});