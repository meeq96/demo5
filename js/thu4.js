$(document).ready(function () {
    // $('.home').click(function (e) { 
    //     e.preventDefault();
    //     $('.navbar ul a').css('color','#333')
    //     $(this).css('color','#05b993')
    // });
    // $('.about').click(function (e) { 
    //     e.preventDefault();
    //     $('.navbar ul a').css('color','#333')
    //     $(this).css('color','#05b993')
    // });
    // $('.drop').click(function (e) { 
    //     e.preventDefault();
    //     $('.navbar ul a').css('color','#333')
    //     $(this).css('color','#05b993')
    // });
    // $('.pricing').click(function (e) { 
    //     e.preventDefault();
    //     $('.navbar ul a').css('color','#333')
    //     $(this).css('color','#05b993')
    // });
    // $('.contact').click(function (e) { 
    //     e.preventDefault();
    //     $('.navbar ul a').css('color','#333')
    //     $(this).css('color','#05b993')
    // });
    $('.click1').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#services').offset().top
        },1000)
    });
    $('.click2').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#statistics').offset().top
        },1000)
    });
    $('.click3').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#partners').offset().top
        },1000)
    });
    $('.click4').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#why').offset().top
        },1000)
    });
    $('.click5').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#team').offset().top
        },1000)
    });
    var check=true
    if(check===true){
        $('.drop').click(function (e) { 
            e.preventDefault();
            $('.txt').css('display','block')
        });
        check=false
    }
    else{
        $('.drop').click(function (e) { 
            e.preventDefault();
            $('.txt').css('display','none')
        });
        check=true
    }
});