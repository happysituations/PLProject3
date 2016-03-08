var person = function(){ // This line to the line with "}();" creates a Closure.
    // private data
    var data = {            // This is an exmaple of a javaScript Object.
        firstName: "",
        lastName: "",
        email: "",
    };

    var F = function(){};
    f = new F();            // This is an example of the conflicted nature of JavaScript.
                            // In the words of Douglas Crockford, "JavaScript itself is not confident in its prototypal nature,
                            // so it offers an object-making syntax that is reminiscent of the classical oo languages. Few
                            // classical progrmmers found prototypal inheritance to be acceptable and classically inspired
                            // syntax obscures the language's true nature. It is the worst of both worlds.

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
/*
var a1 = Object.create(customer);

document.writeln(Object.getPrototypeOf(a1) + "<BR>");
document.writeln(a1.sname + "<BR>");
document.writeln(a1.run('says') + "<BR>");
a1.run('$name')('a1');
document.writeln(a1.run('name') + "<BR>");


var socrates = Object.create(employee);

document.writeln("<BR>");
document.writeln(Object.getPrototypeOf(socrates) + "<BR>");
document.writeln(socrates.sname + "<BR>");
document.writeln(socrates.run('says') + "<BR>");
document.writeln(socrates.run('quality') + "<BR>");
socrates.run('$name')('socrates');
socrates.run('$says')('I am Socrates.');
document.writeln(socrates.run('says') + "<BR>");
document.writeln(socrates.age + "<BR>");

// View local properties.
document.writeln("<BR>" + "Local properties are: <BR>");
for (var key in Object.getPrototypeOf(socrates)) {
    if (Object.getPrototypeOf(socrates).hasOwnProperty(key)) {
        document.writeln('socrates: ' + key + " -> " + Object.getPrototypeOf(socrates)[key] + "<BR>");
    }
}

// View local and inherited properties.
document.writeln("<BR>" + "Local and inherited properties are: <BR>");
for (var key in Object.getPrototypeOf(socrates)) {
    document.writeln('socrates: ' + key + " -> " + Object.getPrototypeOf(socrates)[key] + "<BR>");
}

document.writeln("<BR>");
document.writeln("Socrates memo is: " + socrates.run('memo') + "<BR>");

// Polymorphism.
a1.speak = function(a){ document.writeln(a.run('says') + "<BR>"); }
document.writeln("<BR>");
a1.speak(a1);
a1.speak(socrates);
*/
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

