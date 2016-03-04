$(document).ready(function(){
    $("#jdom a").click(function(){
        $(this).toggleClass("hide");
        if($(this).attr("class") != "hide"){
            $(this).prev().hide();
            $(this).text("Show More");
        }
        else{
            $(this).prev().show();
            $(this).text("Show Less");
        }
    });
});