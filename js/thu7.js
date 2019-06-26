$(document).ready(function () {
    $('.thu1').click(function (e) { 
        e.preventDefault();
        $('.txt1').text('Vietnam');
    });
    $('.thu2').click(function (e) { 
        e.preventDefault();
        $('.txt1').text('Korea');
    });
    $('.thu3').click(function (e) { 
        e.preventDefault();
        $('.txt1').text('Japan');
    });
    $('.thu4').click(function (e) { 
        e.preventDefault();
        $('.txt2').text('Entertaiment');
    });
    $('.thu5').click(function (e) { 
        e.preventDefault();
        $('.txt2').text('Reality');
    });
    $('.thu6').click(function (e) { 
        e.preventDefault();
        $('.txt2').text('Living');
    });
});