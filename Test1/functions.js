var _this = this;
// named function
function fgreet(name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
}
// anonymous function
var vgreet = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
// arrow function
/*
  *** WARNING ***
Keep in mind that the arrow function (=>) syntax changes the way the
this operator works when working with classes.
*/
/*
There is an alternative function syntax, which uses the arrow (=>) operator after the
function’s return type and skips the usage of the function keyword.
*/
var agreet = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi! my name is " + _this.fullname;
    }
};
/*
We can now add the *** type annotations *** to the greet
variable to match the anonymous function signature.
*/
var greet = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
console.log(greet());
console.log(greet("jp"));
/*
The usage of this kind of annotations is really common when we
use a call back (functions used as an argument of another function).
*/
/*
We are declaring a function named sume that takes two
numbers and a callback as a function. The type annotations will force the callback
to return void and take a number as its only argument.
*/
function sume(a, b, callback) {
    callback(a + b);
}
