var t = 1;
// *** var, let, const ***
var mynum = 1; // scoped to the nearest function block (or global, if outside a function block).
var isValid = true; // scoped to the nearest enclosing block (or global if outside any block)
var apiKey = "0E5CE8BD-6341-4CC2-904D-C4A94ACD276E"; // constants are block scoped
// ***  data types  ***
var isDone = false;
var height = 6;
var nom = "bob";
nom = 'smith';
var list_1 = [1, 2, 3];
var list_2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// *** type any used to represent a javaScript value ***
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list = [1, true, "free"]; // *** array with a mixt of different types
list[1] = 100;
// *** The opposite in some ways to any is void ***
function warnUser() {
    alert("This is my warning message");
}
var TestVar; // variable is declared but not initialized
alert(TestVar); // shows undefined
alert(typeof TestVar); // shows undefined
var TestVar = null; // variable is declared and value null is assigned as value
alert(TestVar); // shows null
alert(typeof TestVar); // shows object
// **** union types ****
var path;
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml'];
// **** Type guards ****
var x = { /* ... */};
if (typeof x === 'string') {
    console.log(x.splice(3, 1)); // Error, 'splice' does not exist on 'string'
}
// x is still any
x.foo(); // OK
customConsole.log("A log entry!"); // ok
