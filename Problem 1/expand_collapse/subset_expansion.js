$(document).ready(function(){
    $("#jdom a").click(function(){
        $(this).toggleClass("hide");
        if($(this).attr("class") != "hide"){
            $(this).prev().hide();
        }
        else{
            $(this).prev().show();
        }
    });
});