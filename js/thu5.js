$(document).ready(function () {
    var topbarHeight=$('#top-bar').outerHeight();//chieefu cao coongj voiws margin luoon
    $('#top-bar a').click(function (e) { 
        e.preventDefault();
        $('#top-bar a').removeClass('thu')
        $(this).addClass('thu')
        $('html,body').stop().animate({//dungf stop() khi click do thi bo bor hest, chayj laji tuw ddafu
            scrollTop:$(this.hash).offset().top-topbarHeight
        },1000,'easeOutSine')//dungf teen hieeuj uwngs owr trang easings.net
    });
    $(window).scroll(function () { 
        var currentPos=$('html,body').scrollTop()
        // console.log(currentPos)
        // if(currentPos>800 && currentPos<2730){
        //     $('.thu2').addClass('thu')
        // }
        // else{
        //     $('.thu2').removeClass('thu')            
        // }
        // if(currentPos>2730 && currentPos<4800){
        //     $('.thu3').addClass('thu')
        // }
        // else{
        //     $('.thu3').removeClass('thu')            
        // }
        $.each($('#top-bar a'), function (indexInArray, valueOfElement) { 
            var eachHref= console.log($(valueOfElement).attr('href'))
            var getTop=$(eachHref).offset().top
            console.log(getTop)
        });
    });
});