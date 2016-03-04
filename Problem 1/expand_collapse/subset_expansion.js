$(document).ready(function(){
    $("#jdom a").click(function(){
        $(this).toggleClass("hide");
        if($(this).attr("class") != "hide"){
            $(this).next().hide();
        }
        else{
            $(this).next().show();
        }
    });
});