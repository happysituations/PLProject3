var person = function(){ // This line to the line with "}();" creates a Closure.
    // private data
    var data = {            // This is an exmaple of a javaScript Object.
        name:'person',
        $name: function(n){
            data.memo += 1; // This, and the object entry "memo: 0" below is an example of Memoization where a function can
                            // keep track of some prior behavior.
            data.name = n },
        memo: 0,
        dob: new Date('January 1, 1980'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm a person",
        $says: function(n){data.memo += 1; data.says = n},
        quality: 'Virtue',
        $quality: function(n){data.memo += 1; data.quality = n}
    };

    var F = function(){};
    f = new F();            // This is an example of the conflicted nature of JavaScript.
                            // In the words of Douglas Crockford, "JavaScript itself is not confident in its prototypal nature,
                            // so it offers an object-making syntax that is reminiscent of the classical oo languages. Few
                            // classical progrmmers found prototypal inheritance to be acceptable and classically inspired
                            // syntax obscures the language's true nature. It is the worst of both worlds.

    // public data
    f.sname = 'person'
    f.run = function (e) {
        return data[e];
    };

    return f;
}();                        // This is an example of Function Application.

var customer = function(p){
    // private data
    var data = {
        name:'customer',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        dob: new Date('January 1, 1990'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm an customer",
        $says: function(n){data.memo += 1; data.says = n}
    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.aname = 'customer'
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
        name:'employee',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        dob: new Date('January 1, 2010'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm a employee",
        $says: function(n){data.memo += 1; data.says = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.hname = 'employee'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };
    f.age = (new Date()).getFullYear() - f.run('dob').getFullYear();

    return f;
}(customer);

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

