$(document).ready(function(){
    $("#coe a").click(function(){
        $(this).toggleClass("hide");
        if($(this).attr("class") != "hide"){

            $(this).prev().hide();
        }
        else{
            $(this).prev().show();
        }
    });

    $("#cc").click(
        function() {
            var fc = $("#firstc").val();
            var lc = $("#lastc").val();
            var ec = $("#emailc").val();
            var c = $("#customer").val();
            var isValid = true;

            // validate the first email address
            if (fc == "") {
                $("#firstc_error").text("This field is required.");
                isValid = false;
            } else {
                $("#firstc_error").text("");
            }

            if (lc == "") {
                $("#lastc_error").text("This field is required.");
                isValid = false;
            } else {
                $("#lastc_error").text("");
            }

            if (ec == "") {
                $("#emailc_error").text("This field is required.");
                isValid = false;
            } else {
                $("#emailc_error").text("");
            }

            if (c == "") {
                $("#customer_error").text("This field is required.");
                isValid = false;
            } else {
                $("#customer_error").text("");
            }

            // submit the form if all entries are valid
            if (isValid) {
                $('body').append(fc);
            }
        } // end function
    ); // end click
    $("#email_address1").focus();



    $("#ce").click(
        function() {
            var emailAddress1 = $("#email_address1").val();
            var emailAddress2 = $("#email_address2").val();
            var isValid = true;

            // validate the first email address
            if (emailAddress1 == "") {
                $("#email_address1_error").text("This field is required.");
                isValid = false;
            } else {
                $("#email_address1_error").text("");
            }

            // validate the second email address
            if (emailAddress2 == "") {
                $("#email_address2_error").text("This field is required.");
                isValid = false;
            } else if (emailAddress1 !== emailAddress2) {
                $("#email_address2_error").text("This entry must equal first entry.");
                isValid = false;
            } else {
                $("#email_address2_error").text("");
            }

            // validate the first name entry
            if ($("#first_name").val() == "") {
                $("#first_name_error").text("This field is required.");
                isValid = false;
            }
            else {
                $("#first_name_error").text("");
            }

            // submit the form if all entries are valid
            if (isValid) {
                $("#email_form").submit();
            }
        } // end function
    ); // end click
    $("#email_address1").focus();
});

