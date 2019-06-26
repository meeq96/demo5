 $(document).ready(function () {
    var currentIndex=0;
    var totalIndex=$('.gomne').length;
    // console.log(totalIndex)
    $('.right').click(function (e) { 
        e.preventDefault();
        if(currentIndex===totalIndex-3){
            currentIndex=0
        }
        else{
            currentIndex=currentIndex+1;
        }
        $('.gomso2').css('transform',`translateX(-${(currentIndex*100)+(currentIndex*14)}%)`);
    });
    $('.left').click(function (e) { 
        e.preventDefault();
        if(currentIndex===0){
            currentIndex=totalIndex-3
        }
        else{
            currentIndex=currentIndex-1;
        }
        $('.gomso2').css('transform',`translateX(-${(currentIndex*100)+(currentIndex*14)}%)`);
    });
 });