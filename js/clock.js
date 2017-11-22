$(document).ready(function(){
    //var timer = setInterval(myTimer, 1000);
    var minutes = 25;
    var seconds = 0;
    var clicked = false;
    var timer = 0;
    $("#start").on("click", function(){
        if(!clicked){
            timer = setInterval(myTimer, 1000);            
            $("#start").html("Stop");
            clicked = true;
        }else{            
            clearInterval(timer);
            $("#start").html("Start");
            clicked = false;
        }
    });

    function myTimer(){
        
        if(seconds <= 0){
            minutes -= 1;
            seconds = 60;
        }
        seconds -= 1;
        $("#timer").html(minutes.toString()+":"+seconds.toString());

    }

    $("#minus").on("click", function(){        
        if(minutes > 1){
            minutes -= 1;
            clearInterval(timer);
            clicked = false;
            seconds = 0;
            $("#start").html("Start");
            $("#timer").html(minutes.toString()+":00");
        }
    });
    $("#plus").on("click", function(){
        if(minutes < 60){
            minutes += 1;
            clearInterval(timer);
            clicked = false;
            seconds = 0;
            $("#start").html("Start");
            $("#timer").html(minutes.toString()+":00");
        }
    });
});
