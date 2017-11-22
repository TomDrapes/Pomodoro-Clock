$(document).ready(function(){
    //var timer = setInterval(myTimer, 1000);
    var minutes = 25;
    var seconds = 0;
    var clicked = false;
    var timer = 0;
    var interval = 0
    $("#start").on("click", function(){
        if(!clicked){
            interval = minutes;
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
        var toggle = true;
        if(minutes <=0 && seconds <= 0){                        
            $("#timer").css("font-size", "54px");            
            $("#timer").html("TIME UP");
            $("#start").html("Reset")
          //  debugger;
            toggle = false;
            
        }
        if(toggle){
            if(seconds <= 0){
                seconds = 60;
                minutes -= 1;             
            }
            seconds -= 1;
            if(minutes < 10 && seconds < 10){
                $("#timer").html("0"+minutes.toString()+":0"+seconds.toString());
            }else if(minutes < 10){
                $("#timer").html("0"+minutes.toString()+":"+seconds.toString());
            }else if(seconds < 10){
                $("#timer").html(minutes.toString()+":0"+seconds.toString());
            }else{
                $("#timer").html(minutes.toString()+":"+seconds.toString());
            }
        }else{
            minutes = interval;
            clearInterval(timer);
            clicked = false;
        }

    }

    $("#minus").on("click", function(){        
        if(minutes > 1){
            minutes -= 1;            
            reset();
        }
    });
    $("#plus").on("click", function(){
        if(minutes < 60){
            minutes += 1;
            reset();            
        }
    });

    function reset(){
        clearInterval(timer);
        clicked = false;
        seconds = 0;
        $("#start").html("Start");
        if(minutes < 10){
            $("#timer").html("0"+minutes.toString()+":00");
        }else{
            $("#timer").html(minutes.toString()+":00");
        }
    }
});
