//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#box").hide();

    $("#toggle-btn").click(function(){
        $("#box").toggle();
    });

    $('#box').click(function () {
            $(this).css("animation", "box 10s infinite");
    });
    

    $("#name").click(function(){
        $("#box").css({
            "background-color": "blue",
            "border-radius": "50%",  
            "width": "100px",   
            "height": "100px" 

        });
        
    });

    $("#reset-btn").click(function () {
        $("#box").hide();
        $("#box").css("animation", "");
        
        $("#box").css({
            "width": "",
            "background-color": "",
            "animation": "",
            "border-radius": "",  
            "height": "" 
        });
    });

});