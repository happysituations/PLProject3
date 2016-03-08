var person = function(){ // This line to the line with "}();" creates a Closure.
    // private data
    var data = {            // This is an exmaple of a javaScript Object.
        firstName: "",
        lastName: "",
        email: "",
    };

    var F = function(){};
    f = new F();

    // public data
    f.pname = 'person'
    f.run = function (e) {
        return data[e];
    };

    return f;
}();                        // This is an example of Function Application.

var customer = function(p){
    // private data
    var data = {
        customerNum: ""
    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.cname = 'customer'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);

var employee = function(p){
    // private data
    var data = {
        ssn: ""
    };

    var A = function(){};
    A.prototype = p;
    a = new A();

    // public data
    a.ename = 'employee'
    a.run = function (e) {
        var r = data[e];
        if(r === undefined) return A.prototype.run(e);
        else return r;
    };

    return a;
}(person);

$(document).ready(function(){
    $("#coe a").click(function(){
        $(this).toggleClass("hide");
        if($(this).attr("class") != "hide"){
            $(this).prev().hide();
            $(this).text("Click here");
        }
        else{
            $(this).prev().show();
            $(this).text("Show less");
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
                var cust = Object.create(customer);
                cust.firstName = fc;
                cust.lastName = lc;
                cust.email = ec;
                cust.customerNum = c;
                $('body').append("You entered: <br>");
                $('body').append("Name: " + cust.firstName+ " " + cust.lastName+"<br>");
                $('body').append("Email: "+cust.email+"<br>");
                $('body').append("Customer number: "+cust.customerNum+"<br>");
                $('body').append("<br>");
            }
        } // end function
    ); // end click


    $("#ce").click(
        function() {
            var fe = $("#firste").val();
            var le = $("#laste").val();
            var ee = $("#emaile").val();
            var s = $("#social").val();
            var valid = true;

            // validate the first email address
            if (fe == "") {
                $("#firste_error").text("This field is required.");
                valid = false;
            } else {
                $("#firste_error").text("");
            }

            if (le == "") {
                $("#laste_error").text("This field is required.");
                valid = false;
            } else {
                $("#laste_error").text("");
            }

            if (ee == "") {
                $("#emaile_error").text("This field is required.");
                valid = false;
            } else {
                $("#emaile_error").text("");
            }

            if (s == "") {
                $("#social_error").text("This field is required.");
                valid = false;
            } else{
                $("#social_error").text("");
            }

            // submit the form if all entries are valid
            if (valid) {

                var emp = Object.create(employee);
                emp.firstName = fe;
                emp.lastName = le;
                emp.email = ee;
                emp.ssn = s;
                $('body').append("You entered: <br>");
                $('body').append("Name: " + emp.firstName+ " " + emp.lastName+"<br>");
                $('body').append("Email: "+emp.email+"<br>");
                $('body').append("Social security number: "+emp.ssn+"<br>");
                $('body').append("<br>");
            }
        } // end function
    ); // end click
    $("#email_address1").focus();
});

