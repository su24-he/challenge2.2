//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#box").hide();

    $("#toggle-btn").click(function(){
        $("#box").toggle();
    });

    $("#box").click(function(){
        $(this).animate({width:"50%"}, 500);
    });

    $("#name").click(function(){
        $("#box").css("background-color", "white");
    });
});