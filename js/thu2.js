// import { setInterval } from "timers";

$(document).ready(function () {
    var currentIndex=0;
    var totalIndex=$('.slider-img img').length;
    var slide=null
    var status=true
    console.log(totalIndex)
    $('.next').click(function (e) { 
        e.preventDefault();
        if(currentIndex===totalIndex-1){
            currentIndex=0
        }
        else{
            currentIndex=currentIndex+1;
        }
        $('.slider-img').css('transform',`translateX(-${currentIndex*100}%)`);
    });
    $('.prev').click(function (e) { 
        e.preventDefault();
        if(currentIndex===0){
            currentIndex=totalIndex-1
        }
        else{
            currentIndex=currentIndex-1;
        }
        $('.slider-img').css('transform',`translateX(-${currentIndex*100}%)`);
    });


    // setInterval(showslide,1000);//công dụng là chạy 1 hàm trong khoảng tg nhất định
    var slide = setInterval(showslide , 1000)
    $('.stop').click(function (e) { 
        e.preventDefault();
        if(status===true ){
            $('.stop').text("Start Sliders")
            // setInterval(showslide , 1000)
            clearInterval(slide)
            status=false
        }
        else{
            $('.stop').text("Stop Sliders")
            // clearInterval(slide)
            slide = setInterval(showslide , 1000)
            status=true
        }
    });
    
});

//ham trong jquery
function showslide(){
    $('.next').click();
}