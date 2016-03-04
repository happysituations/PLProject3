/**
 * Created by Happy Situ, Charles Martinez, Connie Wu on 03/04/16.
 */

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

var employee = function(p){
    // private data
    var data = {
        name:'employee',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        dob: new Date('January 1, 1990'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm an employee",
        $says: function(n){data.memo += 1; data.says = n}
    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.aname = 'employee'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);

var customer = function(p){
    // private data
    var data = {
        name:'customer',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        dob: new Date('January 1, 2010'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm a customer",
        $says: function(n){data.memo += 1; data.says = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.hname = 'customer'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };
    f.age = (new Date()).getFullYear() - f.run('dob').getFullYear();

    return f;
}(employee);

var a1 = Object.create(employee);

document.writeln(Object.getPrototypeOf(a1) + "<BR>");
document.writeln(a1.sname + "<BR>");
document.writeln(a1.run('says') + "<BR>");
a1.run('$name')('a1');
document.writeln(a1.run('name') + "<BR>");

var socrates = Object.create(customer);

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
    $("#person_form").click(function(){
        var cust = $("#person_form");
        var firstName = $("#first_name");
        var lastName = $("#last_name");
    $("button").click(function(){
        $("")
    })
    });
})