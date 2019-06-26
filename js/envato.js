$(document).ready(function () {
    var opa=true
    var ci=0
    $(window).scroll(function () { 
        var currentPos=$('body,html').scrollTop()
        console.log(currentPos)
        if(currentPos > 40){
            $('.top').addClass('fadeOut')
            $('.container2').addClass('fadeIn')
        }
        else{
            $('.top').removeClass('fadeOut')
            $('.container2').removeClass('fadeIn')
        }
        if(currentPos>380){
            $('.gom p').addClass('fadeInn')
            $('.gom h1').addClass('fadeInn')
            $('.so40').addClass('fadeIn0')
            $('.so41').addClass('fadeIn1')
            $('.so42').addClass('fadeIn2')
            $('.so43').addClass('fadeIn3')
            $('.so44').addClass('fadeIn4')
        }
        else{
            $('.so40').removeClass('fadeIn0')
            $('.so41').removeClass('fadeIn1')
            $('.so42').removeClass('fadeIn2')
            $('.so43').removeClass('fadeIn3')
            $('.so44').removeClass('fadeIn4')
        }
        if(currentPos>1500){
            $('.gomne1').addClass('toTop')
        }
        else{
            $('.gomne1').removeClass('toTop')
        }
        if(currentPos>1800){
            $('.gomne2').addClass('toTop')
        }
        else{
            $('.gomne2').removeClass('toTop')
        }
        if(currentPos>2100){
            $('.gomne3').addClass('toTop')
        }
        else{
            $('.gomne3').removeClass('toTop')
        }
    });


    
    $('.bg1 img').click(function (e) { 
        e.preventDefault();
        $(this).css('opacity', '1')
        $('.bg2 img').css('opacity','0.7')
        $('.bg3 img').css('opacity','0.7')
        $('.bg4 img').css('opacity','0.7')
        $('.bg5 img').css('opacity','0.7')
        var srcSmall=$('.bg1 .so1 img').attr('src');
        $('.anh').find('img').attr('src',srcSmall);//thang nao co thuoc tinh img thi lay srcSmall cho cai 'src'
    });
    $('.bg2 img').click(function (e) { 
        e.preventDefault();
        $(this).css('opacity', '1')
        $('.bg1 img').css('opacity','0.7')
        $('.bg3 img').css('opacity','0.7')
        $('.bg4 img').css('opacity','0.7')
        $('.bg5 img').css('opacity','0.7')
        var srcSmall=$('.bg2 .so1 img').attr('src');
        $('.anh').find('img').attr('src',srcSmall);//thang nao co thuoc tinh img thi lay srcSmall cho cai 'src'
    });
    $('.bg3 img').click(function (e) { 
        e.preventDefault();
        $(this).css('opacity', '1')
        $('.bg1 img').css('opacity','0.7')
        $('.bg2 img').css('opacity','0.7')
        $('.bg4 img').css('opacity','0.7')
        $('.bg5 img').css('opacity','0.7')
        var srcSmall=$('.bg3 .so1 img').attr('src');
        $('.anh').find('img').attr('src',srcSmall);//thang nao co thuoc tinh img thi lay srcSmall cho cai 'src'
    });
    $('.bg4 img').click(function (e) { 
        e.preventDefault();
        $(this).css('opacity', '1')
        $('.bg1 img').css('opacity','0.7')
        $('.bg3 img').css('opacity','0.7')
        $('.bg2 img').css('opacity','0.7')
        $('.bg5 img').css('opacity','0.7')
        var srcSmall=$('.bg4 .so1 img').attr('src');
        $('.anh').find('img').attr('src',srcSmall);//thang nao co thuoc tinh img thi lay srcSmall cho cai 'src'
    });
    $('.bg5 img').click(function (e) { 
        e.preventDefault();
        $(this).css('opacity', '1')
        $('.bg1 img').css('opacity','0.7')
        $('.bg3 img').css('opacity','0.7')
        $('.bg4 img').css('opacity','0.7')
        $('.bg2 img').css('opacity','0.7')
        var srcSmall=$('.bg5 .so1 img').attr('src');
        $('.anh').find('img').attr('src',srcSmall);//thang nao co thuoc tinh img thi lay srcSmall cho cai 'src'
    });
});